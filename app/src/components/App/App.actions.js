// @flow

export const SET_VIEWPORT = 'SET_VIEWPORT';

export function setViewport(viewportSize: string) {
  return {
    type: SET_VIEWPORT,
    payload: {
      viewportSize
    }
  };
}
