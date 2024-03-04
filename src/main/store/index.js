import clients from './modules/clients.store';
import products from './modules/products.store';
import relationships from './modules/relationships.store';
import VuexPersistence from 'vuex-persist'

const store = {
  modules: {
    clients,
    products,
    relationships
  },
  plugins: [new VuexPersistence().plugin]
};

export default store;