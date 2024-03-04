const state = {
  items: [
    { Produto: 'Mailing List', Ativo: true },
    { Produto: 'Enriquecimento de dados', Ativo: true },
  ]
}
const mutations = {
  addProduct(state, product) {
    state.items.push(product)
  }
}
const actions = {
  addProduct(store, product) {
    store.commit('addProduct', product)
  }
}
const getters = {
  getProducts(state) {
    return state.items.map(item => ({
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