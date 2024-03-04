import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  asyncStorage: true,
});

export default vuexLocal;