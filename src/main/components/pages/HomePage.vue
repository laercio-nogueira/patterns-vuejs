<template>
  <div class="card">
    <Heading1Atom text="Principal" class="mb-4"/>

    <ListDataAtom 
      :legends="['Name', 'Documento', 'Telefone', 'Email', 'Ativo']"
      :items="getClients"
      remove
      link
      @link="selectClient"
      @remove="removeClient"
    />

    <SliderAtom showClose :open="open" @close="open = false">
    </SliderAtom>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Heading1Atom from '#components/atoms/Heading1Atom'
import ListDataAtom from '#components/atoms/ListDataAtom'

export default {
  name: 'HomePage',
  components: {
    Heading1Atom,
    ListDataAtom,
    SliderAtom,
  },
  data: () => ({
    open: false,
    clientId: '',
    productId: ''
  }),
  computed: {
    ...mapGetters('clients', ['getClients'])
  },
  methods: {
    ...mapActions('clients', ['removeClient']),
    selectClient(index) {
      this.open = true,
      this.clientId = index
    },
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