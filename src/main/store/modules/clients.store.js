import { v4 as uuidv4 } from 'uuid';

const state = {
  clients: [
    { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3ddddf', Name: 'John Doe', Documento: '123.456.789-01', Telefone: '(12) 934567-8901', Email: 'john.doea@teste.br', Ativo: true },
    { id: '111d6bcd-bbfd-4b2d-9b5d-998dfbzd4bed', Name: 'Mary Jane', Documento: '987.654.321-00', Telefone: '(45) 967843-2111', Email: 'tteste@rots.com', Ativo: true },
  ]
}
const mutations = {
  addClient(state, client) {
    state.clients.push(client)
  },
  removeClient(state, clients) {
   
    state.clients = clients
  }
}
const actions = {
  addClient({ commit }, client) {
    commit('addClient', { ...client, id: uuidv4() })
  },
  removeClient({ state, commit }, id) {
    const newStateClients = state.clients.filter(item => item.id !== id)
    commit('removeClient', newStateClients)
  }
}
const getters = {
  getClients(state) {
    return state.clients.map(item => ({
      ...item,
      Ativo: item.Ativo ? 'Sim' : 'Não'
    }))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};