export const SET_VIEWPORT = 'SET_VIEWPORT';

export function setViewport(viewportSize) {
  return {
    type: SET_VIEWPORT,
    payload: {
      viewportSize
    }
  };
}
