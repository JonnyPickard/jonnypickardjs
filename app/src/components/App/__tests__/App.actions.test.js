import { setViewport, SET_VIEWPORT } from '../App.actions';

describe('App Actions', () => {
  describe('setViewport', () => {
    it('should return the appropriate state object', () => {
      const testViewport = 'desktop';
      const returnedState = setViewport(testViewport);

      expect(returnedState).toEqual({
        type: SET_VIEWPORT,
        payload: { viewportSize: testViewport }
      });
    });
  });
});
