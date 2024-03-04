const state = {
  clients: [
    { Name: 'John Doe', Documento: '123.456.789-01', Telefone: '(12) 934567-8901', Email: 'john.doea@teste.br', Ativo: true },
    { Name: 'Mary Jane', Documento: '987.654.321-00', Telefone: '(45) 967843-2111', Email: 'tteste@rots.com', Ativo: true },
  ]
}
const mutations = {
  addClient(state, client) {
    state.clients.push(client)
  },
  removeClient(state, client) {
    const index = state.clients.indexOf(client)
    state.clients.splice(index, 1)
  }
}
const actions = {
  addClient(state, client) {
    state.commit('addClient', client)
  },
  removeClient(state, client) {
    state.commit('removeClient', client)
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