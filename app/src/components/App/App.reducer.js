import { SET_VIEWPORT } from './App.actions';

const appReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_VIEWPORT:
      return { viewportSize: payload.viewportSize };
    default:
      return state;
  }
};

export default appReducer;
