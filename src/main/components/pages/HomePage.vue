<template>
  <div class="card">
    <Heading1Atom text="Principal" class="mb-4"/>

    <ListDataAtom 
      :legends="['Name', 'Documento', 'Telefone', 'Email', 'Ativo']"
      :items="getClients"
      remove
      link
      @link="linkProducts"
      @remove="removeClient"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Heading1Atom from '#components/atoms/Heading1Atom'
import ListDataAtom from '../atoms/ListDataAtom'

export default {
  name: 'HomePage',
  components: {
    Heading1Atom,
    ListDataAtom
  },
  computed: {
    ...mapGetters('clients', ['getClients'])
  },
  methods: {
    ...mapActions('clients', ['removeClient']),
    deleteClient(index) {
      this.removeClient(index)
    },
    linkProducts(index) {
      console.log(index)
    }
  }
}
</script>

<style scoped lang="scss">
.page-content {
  display: flex;
  float: right;
  width: calc(100% - rem(235px));
}
</style>