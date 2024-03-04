import { v4 as uuidv4 } from 'uuid';

const state = {
  items: [
    { id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', Produto: 'Mailing List', Ativo: true },
    { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', Produto: 'Enriquecimento de dados', Ativo: true },
  ]
}
const mutations = {
  addProduct(state, product) {
    state.items.push(product)
  }
}
const actions = {
  addProduct({ commit }, product) {
    commit('addProduct', { ...product, id: uuidv4() })
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