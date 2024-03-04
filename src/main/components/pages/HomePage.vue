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
    <template v-slot:header>
        <Heading1Atom text="Vincular produtos" />
      </template>
      
      <ListDataAtom 
        :legends="['Name', 'Documento']"
        :items="getClientsById"
      />
      <Heading5Atom text="Produtos" />
      <SelectGenericAtom 
        :items="getProducts" 
        field="Produto"
        @input="(id) => productId = id"
        class="mb-3"
      />
      <ButtonGenericAtom 
        buttonText="Vincular" 
        @click="linkProduct({ clientId, productId })"
        :disabled="isDisabled"
      />

      <hr />
      <ListDataAtom 
        :legends="[{ value: 'Produto', text: 'Produtos Vinculados' }]"
        :items="getClientsById[0]?.products"
      />
    </SliderAtom>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Heading1Atom from '#components/atoms/Heading1Atom'
import ListDataAtom from '#components/atoms/ListDataAtom'
import SliderAtom from '#components/atoms/SliderAtom'
import Heading5Atom from '#components/atoms/Heading5Atom'
import SelectGenericAtom from '#components/atoms/SelectGenericAtom'
import ButtonGenericAtom from '#components/atoms/ButtonGenericAtom'

export default {
  name: 'HomePage',
  components: {
    Heading1Atom,
    ListDataAtom,
    SliderAtom,
    Heading1Atom,
    Heading5Atom,
    ListDataAtom,
    SliderAtom,
    SelectGenericAtom,
    ButtonGenericAtom
  },
  data: () => ({
    open: false,
    clientId: '',
    productId: ''
  }),
  computed: {
    ...mapGetters('clients', ['getClients']),
    ...mapGetters('products', ['getProducts']),
    getClientsById() {
      return this.getClients.filter(item => item.id === this.clientId)
    },
    isDisabled() {
      return this.productId === ''
    }
  },
  methods: {
    ...mapActions('clients', ['removeClient', 'linkProduct']),
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