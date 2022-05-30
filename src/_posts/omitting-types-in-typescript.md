---
title: Omitting properties in TypeScript
description: How I discovered that TypeScript can omit properties in types
date: 2022-05-20
---

# Omitting properties in TypeScript

*May 20, 2022*

While working on a project I came across a type issue I hadn't yet encountered. I was creating a `ModalContext` that would allow me to toggle [mantine modals](https://mantine.dev/core/modal/) within the app without needing to declare `Modal` repeatedly. (Fyi, mantine has its own built in [Modals manager](https://mantine.dev/others/modals/), but unfortunately I hadn't yet discovered that.) 

This `ModalContext` contained a `toggleModal` function that took in the following params and was defined as follows:

```tsx
interface ToggleModalParams {
  isVisible: boolean; /*Determines if the modal is open or closed*/
  content?: React.ReactNode; /*Content to display inside the modal*/
  props?: ModalProps; /*Props to pass to the modal*/
}

const toggleModal = ({isVisible, content, props = {}}: ToggleModalParams) => {
  setIsOpen(isVisible);
  if (Object.keys(props).length) {
    setModalProps(props);
  }
  if (content) {
    setModalContent(content);
  }
};
```

Inside the context provider I rendered a mantine `Modal` and manually `opened` and `onClose` props. This was done to make sure that simplify the props I would need to pass to the `Modal` component:

```tsx
import React, {createContext, useState} from 'react';
import {Modal, ModalProps} from '@mantine/core';

const [isOpen, setIsOpen] = useState<boolean>(false);
const [modalProps, setModalProps] = useState<ModalProps>({});
const [modalContent, setModalContent] = useState<React.ReactNode>(null);

<ModalContext.Provider value={{toggleModal}}>
  <Modal
    {...modalProps}
    opened={isOpen}
    onClose={() => {
      toggleModal({isVisible: false});
    }}
  >
    {modalContent}
  </Modal>
  {children}
</ModalContext.Provider>
```

I setup the context and attempted to use the `toggleModal` function for the first time:

```tsx
const toggleRandomModal = () => toggleModal({
  isVisible: true,
  content: (
    <>Hi there! 😎</>
  ),
  props: {
    title: 'Am I a modal?',
    centered: true,
    size: 300,
  },
});
```

This seemed all and well, but I noticed the following type error was occurring for the "props" param:

```ts
(property) ToggleModalParams.props?: ModalProps | undefined

Type '{ title: string; centered: true; size: number; }' is missing the
following properties from type 'ModalProps': opened, onClose ts(2739)

ModalContext.tsx: The expected type comes from property 'props' which
is declared here on type 'ToggleModalParams'
```

Ah snap 🥲. The `ModalProps` type I was importing from `@mantine/core` [explicitly requires "opened" and "onClose"](https://github.com/mantinedev/mantine/blob/949933e970e14f90d56cec233a93241bb5d910e6/src/mantine-core/src/components/Modal/Modal.tsx#L27-L31). As a result TypeScript was unhappy when I tried to pass in a `props` object that didn't have those fields. It was very tempting to use `//@ts-ignore` and be done with it, but I typically want to avoid anti-patterns and it would get very annoying to have to add `//@ts-ignore` every time I used this function.

After some searching, I discovered the [Omit utility type](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys). As it is nicely described in the TypeScript documentation, this utility type allows you to omit certain keys from a type. This meant I could create my own `IModalProps` type that omitted the `opened` and `onClose` fields:

```tsx
import React from 'react';
import {ModalProps} from '@mantine/core';

type IModalProps = Omit<ModalProps, 'onClose' | 'opened'>;

interface ToggleModalParams {
  isVisible: boolean;
  content?: React.ReactNode;
  props?: IModalProps;
}
```

Nice! Now I could pass in a `props` object that doesn't have those fields and TypeScript will happily accept it.

Thanks for reading! 👋

## References

1. [mantine](https://mantine.dev/)
    - [modal](https://mantine.dev/core/modal/)
    - [modals manager](https://mantine.dev/others/modals/)
2. [Omit utility type](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)
