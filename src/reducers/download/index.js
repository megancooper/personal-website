// import * as constants from '../../constants';

const ACTION_HANDLERS = {

};

export const initialState = {
};

const downloadReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default downloadReducer;
