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
        :items="[getClientsById]"
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
        @click="setProduct"
        :disabled="isDisabled"
      />

      <hr />
      <ListDataAtom 
        :legends="[{ value: 'Produto', text: 'Produtos Vinculados' }]"
        :items="getClientsById.products"
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
      return this.getClients.find(item => item.id === this.clientId) || { products: [] }
    },
    isDisabled() {
      return this.productId === ''
    }
  },
  methods: {
    ...mapActions('clients', ['removeClient', 'linkProduct']),
    selectClient(id) {
      this.open = true,
      this.clientId = id
    },
    setProduct() {
      const isExists = this.getClientsById?.products.find(product => product.id === this.productId);
      if (isExists) {
        this.EventEmitter.$emit('openAlert', { message: 'Este produto ja foi vinculado!', type: 'danger' })
        return
      }
      this.linkProduct({ clientId: this.clientId, productId: this.productId })
      this.EventEmitter.$emit('openAlert', { message: 'Produto vinculado com sucesso!', type: 'success' })
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