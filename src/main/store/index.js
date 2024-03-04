import VuexPersistence from 'vuex-persist'
import clients from './modules/clients.store';
import products from './modules/products.store';
import relationships from './modules/relationships.store';

const store = {
  modules: {
    clients,
    products,
    relationships
  },
  plugins: [new VuexPersistence().plugin]
};

export default store;