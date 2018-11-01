// @flow

import { SET_VIEWPORT } from './App.actions';

const appReducer = (
  state: Object = {},
  { type, payload }: { type: string, payload: Object }
) => {
  switch (type) {
    case SET_VIEWPORT:
      // Only overwrite the app.viewportSize property
      return { ...state, ...{ viewportSize: payload.viewportSize } };
    default:
      return state;
  }
};

export default appReducer;
