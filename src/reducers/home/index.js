// import * as constants from '../../constants';

const ACTION_HANDLERS = {

};

export const initialState = {
};

const homeReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default homeReducer;
