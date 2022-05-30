---
title: Mistakes I made attempting to persist electron state
description: How to persist electron state in a performant way
date: 2022-04-03
---

# Mistakes I made attempting to persist electron state

*April 3, 2022*

For the past couple of years I've been working on [Melo](https://melo-app.org), a simple music player for your local audio files. The most difficult part of the project has been improving the performance of data persistence. In this post I'll take you through the mistakes and steps I've taken to make Melo faster.

## State management with [redux-persist](https://www.npmjs.com/package/redux-persist) 👎

The first version of Melo was a react app that used [redux](https://www.npmjs.com/package/redux) and [redux-persist](https://www.npmjs.com/package/redux-persist) to manage state. Initially this seemed to be working well; it was easy to setup the redux-persist library and it included a "blacklist" feature which allows you to avoid persisting unneeded data: 

```js
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import rootReducer from '../reducers';

const persistedReducer = persistCombineReducers({
  key: 'primary',
  storage,
  stateReconciler: autoMergeLevel1,
  blacklist: ['music_player'],
}, rootReducer);
```

Unfortunately, as I started to add more files to the app the performance slowed greatly. I was storing a large JSON object in local storage that took a while to load into redux state when the first app launched. Additionally, I had growing concerns about the storage limitations of local storage. As a result, I did some further research and scrapped the redux-persist implementation.


## Storing data to the application data directory 💾

To avoid the limitations of local storage I decided to store data in the application data directory. You can retrieve this path from electron by calling [`app.getPath('userData')`](https://www.electronjs.org/docs/latest/api/app#appgetpathname). Initially I used the `window.onbeforeunload` event to save the state of the app. Before the renderer process shut down it would send file data to the main process using [ipcRenderer](https://www.electronjs.org/docs/latest/api/ipc-renderer): 

```tsx
window.onbeforeunload = (_e: BeforeUnloadEvent) => {
  const {files, playlists} = state;
  ipcRenderer.send(PERSIST_LIBRARY_FILES, files);
  ipcRenderer.send(PERSIST_LIBRARY_PLAYLISTS, playlists);
};
```

The main process would acknowledge these ipc events and save the data to the application data directory. Again I hit a road block; it took several seconds for the main process to save all this data. This made sense as I was storing a huge Javascript object all in one go. To improve this I tried to save the data in smaller chunks and used the [workerpool](https://www.npmjs.com/package/workerpool) library to parallelize the process:

```tsx
const workerpool = require('workerpool');
const jetpack = require('fs-jetpack');

const saveFileChunk = ({files, chunkNumber, hash, appDataPath}) => {
  try {
    const AppData = jetpack.cwd(appDataPath);
    AppData.write(`${hash}${chunkNumber}.json`, files, {
      jsonIndent: 0,
    });
  } catch (error) {
    console.warn(error);
  }

  return true;
};

// create a worker and register public functions
workerpool.worker({
  saveFileChunk,
});
```

Even with these changes storing data was *still* slow, and I discovered [it is an anti-pattern to block the electron main process](https://medium.com/actualbudget/the-horror-of-blocking-electrons-main-process-351bf11a763c). To the drawing board again!

## Using a background electron process to handle data 😎 

After two failed attempts I wanted to make sure my next approach was performant and reliable. I came across this post by James Long where he describes [using a background electron process to handle expensive operations](https://archive.jlongster.com/secret-of-good-electron-apps). I gave this a go and created a backend process that handled reading file data and saving it to a local sqlite database. Upon starting, the server process uses [knex](https://knexjs.org/#Installation-node) to create the database file and tables in the application data directory:

```tsx
import Knex from 'knex';
import path from 'path';
import Files from './tables/files';

const APP_DATA_PATH = process.argv?.[5];
const LOCAL_DATABASE_PATH = './the_database_file_name.db';

export const knex = Knex({
  client: 'better-sqlite3',
  connection: {
    filename: path.join(APP_DATA_PATH, LOCAL_DATABASE_PATH),
  }
});

export const initDatabase = async () => {
  await Files.create(knex);
};
```

When a user imports files, the renderer process uses [node-ipc](https://www.npmjs.com/package/node-ipc) to send file paths to the background process:

```tsx
window.ipc.emit('message', JSON.stringify({ 
  event: 'IMPORT_FILES',
  data: ['/path/to/file1', '/path/to/file2']
}));
```

The background process reads the necessary file data, sends it back to the main process, and also stores it in the database:

```tsx
import { knex } from '../db';

const importFiles = async (socket: Socket, filePaths: string[]) => {
  const files = await getFileMetadata(filePaths);

  knex('files').insert(files);

  ipc.server.emit(socket, 'message', JSON.stringify({ 
    event: 'GET_FILES',
    data: files
  }));

  return true;
};
```

With this change speed improved dramatically and I was able to more easily organize the app's data with sqlite.

Thanks for reading! 👋

## References

1. [redux-persist](https://www.npmjs.com/package/redux-persist)
2. [worker-pool](https://www.npmjs.com/package/workerpool)
3. [The horror of blocking electron's main process](https://medium.com/actualbudget/the-horror-of-blocking-electrons-main-process-351bf11a763c)
4. [The secret of good electron apps](https://archive.jlongster.com/secret-of-good-electron-apps)
5. [Knex](https://knexjs.org/#Installation-node)
