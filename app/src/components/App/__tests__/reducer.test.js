import appReducer from '../App.reducer';
import { SET_VIEWPORT } from '../App.actions';

describe('App Reducer', () => {
  describe('SET_VIEWPORT Action was dispatched', () => {
    it('should return the appropriate state object', () => {
      const testViewport = 'testViewport';
      const testAction = {
        type: SET_VIEWPORT,
        payload: { viewportSize: testViewport }
      };
      const testInitialState = {};

      const returnedState = appReducer(testInitialState, testAction);

      expect(returnedState).toEqual(testAction.payload);
    });
  });

  describe('Irrelevant Action was dispatched', () => {
    it('should return the appropriate state object', () => {
      const TEST_ACTION = 'TEST_ACTION';
      const testAction = {
        type: TEST_ACTION,
        payload: {
          testFakeState: 'unwanted state'
        }
      };
      const testInitialState = {};

      const returnedState = appReducer(undefined, testAction);

      expect(returnedState).toEqual(testInitialState);
    });
  });
});
