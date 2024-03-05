import productsStore from '../../../main/store/modules/products.store';
const commit = jest.fn()

jest.mock('uuid', () => {
  return {
    v4: () => '2f379a28-9ef8-4141-ad83-8767994b50da'
  }
});

describe('Products Store Test', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('Should validate export default', () => {
    expect(productsStore.namespaced).toBe(true);
    expect(productsStore).toHaveProperty('state');
    expect(productsStore).toHaveProperty('mutations');
    expect(productsStore).toHaveProperty('actions');
    expect(productsStore).toHaveProperty('getters');
  });

  it('Should validate getters', () => {
    expect(productsStore.state).toHaveProperty('items');
    expect(productsStore.state.items).toEqual([{"Ativo": true, "Produto": "Mailing List", "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"}, {"Ativo": true, "Produto": "Enriquecimento de dados", "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"}]);
    expect(productsStore.getters.getProducts(productsStore.state)).toEqual([{"Ativo": "Sim", "Produto": "Mailing List", "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"}, {"Ativo": "Sim", "Produto": "Enriquecimento de dados", "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"}]);
  });

  it('Should validate addProduct', () => {
    productsStore.actions.addProduct({ commit }, { client: 'mock-client' })
    expect(commit).toHaveBeenCalledWith("addProduct", {"client": "mock-client", "id": "2f379a28-9ef8-4141-ad83-8767994b50da"});
  })

});