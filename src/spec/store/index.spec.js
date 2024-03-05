import store from '../../main/store';

jest.mock('../../main/store/modules/clients.store.js');
jest.mock('../../main/store/modules/products.store.js');

describe('Store Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should validate store', () => {
    expect(store).toEqual({
      modules: {
        clients: expect.any(Object),
        products: expect.any(Object),
      },
      plugins: [expect.any(Function)],
    });
  });
});