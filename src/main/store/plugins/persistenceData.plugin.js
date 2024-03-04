import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';

const vuexLocal = new VuexPersistence({
  storage: localForage,
  asyncStorage: true,
});

export default vuexLocal;