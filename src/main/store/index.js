import VuexPersistence from 'vuex-persist'
import clients from './modules/clients.store';
import products from './modules/products.store';

const store = {
  modules: {
    clients,
    products,
  },
  plugins: [new VuexPersistence().plugin]
};

export default store;