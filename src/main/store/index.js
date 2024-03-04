import clients from './modules/clients.store';
import products from './modules/products.store';
import relationships from './modules/relationships.store';
import persistenceDataPlugin from './plugins/persistenceData.plugin';

const createStores = () => ({
  modules: {
    clients,
    products,
    relationships
  },
  plugins: [persistenceDataPlugin],
});

export default createStores;