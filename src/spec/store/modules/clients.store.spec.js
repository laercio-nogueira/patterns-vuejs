import clientStore from '../../../main/store/modules/clients.store';
const commit = jest.fn()

jest.mock('uuid', () => {
  return {
    v4: () => '2f379a28-9ef8-4141-ad83-8767994b50da'
  }
});

describe('Client Store Test', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('Should validate export default', () => {
    expect(clientStore.namespaced).toBe(true);
    expect(clientStore).toHaveProperty('state');
    expect(clientStore).toHaveProperty('mutations');
    expect(clientStore).toHaveProperty('actions');
    expect(clientStore).toHaveProperty('getters');
  });

  test('Should validate getters', () => {
    expect(clientStore.state).toHaveProperty('clients');
    expect(clientStore.state.clients).toEqual([{"Ativo": true, "Documento": "123.456.789-01", "Email": "john.doea@teste.br", "Name": "John Doe", "Telefone": "(12) 934567-8901", "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3ddddf", "products": []}, {"Ativo": true, "Documento": "987.654.321-00", "Email": "tteste@rots.com", "Name": "Mary Jane", "Telefone": "(45) 967843-2111", "id": "111d6bcd-bbfd-4b2d-9b5d-998dfbzd4bed", "products": []}]);
    expect(clientStore.getters.getClients(clientStore.state)).toEqual([{"Ativo": "Sim", "Documento": "123.456.789-01", "Email": "john.doea@teste.br", "Name": "John Doe", "Telefone": "(12) 934567-8901", "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3ddddf", "products": []}, {"Ativo": "Sim", "Documento": "987.654.321-00", "Email": "tteste@rots.com", "Name": "Mary Jane", "Telefone": "(45) 967843-2111", "id": "111d6bcd-bbfd-4b2d-9b5d-998dfbzd4bed", "products": []}]);
  });

  test('Should validate addClients', () => {
    clientStore.actions.addClient({ commit }, { client: 'mock-client' })
    expect(commit).toHaveBeenCalledWith("addClient", {"client": "mock-client", "id": "2f379a28-9ef8-4141-ad83-8767994b50da", "products": []});
  })

  it('Should validate removeClients', () => {
    clientStore.actions.removeClient({ commit, state: clientStore.state }, "111d6bcd-bbfd-4b2d-9b5d-998dfbzd4bed")
    expect(commit).toHaveBeenCalledWith("removeClient", [{"Ativo": true, "Documento": "123.456.789-01", "Email": "john.doea@teste.br", "Name": "John Doe", "Telefone": "(12) 934567-8901", "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3ddddf", "products": []}])
  });

  it('Should validate linkClients', () => {
    const rootState = {
      products: {
        items: [
          { id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', Produto: 'Mailing List', Ativo: true },
          { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', Produto: 'Enriquecimento de dados', Ativo: true },
        ]
      }
    }
    clientStore.actions.linkProduct(
      { rootState, commit }, 
      { clientId: "111d6bcd-bbfd-4b2d-9b5d-998dfbzd4bed", productId: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed" })
    expect(commit).toHaveBeenCalledWith("linkProduct", 
    {
      "clientId": "111d6bcd-bbfd-4b2d-9b5d-998dfbzd4bed", 
      "product": {
        "Ativo": true,
        "Produto": "Mailing List",
        "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      }
    })
  });

});