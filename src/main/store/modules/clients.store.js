const state = {
  clients: [
    { Name: 'John Doe', Documento: '12345678901', Telefone: '12345678901', Email: 'laerciopa@laercio', Ativo: true },
    { Name: 'John Doe', Documento: '12345678901', Telefone: '12345678901', Email: 'laerciopa@laercio', Ativo: true },
  ]
}
const mutations = {
  addClient(state, client) {
    state.clients.push(client)
  }
}
const actions = {
  addClient(state, client) {
    state.commit('addClient', client)
  }
}
const getters = {
  getClients(state) {
    return state.clients
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};