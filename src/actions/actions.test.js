import { getData } from "./actions";

describe('actions', () => {
  const API = 'https://swapi.dev/api/people/';
  const mockDispatch = jest.fn();

  beforeEach(() => {
      fetch.resetMocks();
  });

  describe('getData', () => {
      it('should call dispatch with GET_DATA type', async () => {
          fetch.mockResponseOnce(JSON.stringify({entries:[{API: 'Axolotl'}]})); 
          const expectedStartAction = {
              type: 'START_GET_CHARACTERS'
          }
          const expectedSuccessAction = {
              type: 'SUCCESS_GET_CHARACTERS',
              data: [{API: 'Axolotl'}]
          }
          await getData(mockDispatch);

          expect(fetch).toHaveBeenCalledWith(API);
          expect(mockDispatch).toHaveBeenCalledTimes(2);
          expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedStartAction);
          expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedSuccessAction);  
      })
  });
});