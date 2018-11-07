// @flow

export const SET_VIEWPORT = 'SET_VIEWPORT';

export function setViewport(viewportSize: 'mobile' | 'tablet' | 'desktop') {
  return {
    type: SET_VIEWPORT,
    payload: {
      viewportSize
    }
  };
}
