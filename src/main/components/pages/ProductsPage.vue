<template>
<div>
  <div class="card mb-3">
    <Heading1Atom text="Produtos" class="mb-4"/>
    <InputGenericAtom
      textLabel="Produto"
      type="text" 
      name="produto" 
      placeholder="Preencha o nome do produto" 
      required
      :value="product"
      @input="(value) => product = value"
      class="mb-3"
    />

    <Heading5Atom text="Ativo" />
    <ToggleSwitchAtom
      @change="(value) => status = value"
      :checked="status"
      class="mb-3"
    />

    <br/>
    <ButtonGenericAtom
      buttonText="Enviar"
      @click="setProduct"
      width="100px"
      :disabled="isDisabled"
    />
  </div>

  <div class="card">
    <ListDataAtom 
      :legends="[ 'Produto', 'Ativo' ]"
      :items="getProducts"
    />
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ButtonGenericAtom from '../atoms/ButtonGenericAtom'
import InputGenericAtom from '../atoms/InputGenericAtom'
import ToggleSwitchAtom  from '../atoms/ToggleSwitchAtom'
import Heading1Atom from '../atoms/Heading1Atom'
import Heading5Atom from '../atoms/Heading5Atom'
import ListDataAtom from '../atoms/ListDataAtom'

export default {
  name: 'ProductsPage',
  components: {
    ButtonGenericAtom,
    InputGenericAtom,
    ToggleSwitchAtom,
    Heading1Atom,
    Heading5Atom,
    ListDataAtom,
  },
  data: () => ({
    product: '',
    status: true,
  }),
  computed: {
    ...mapGetters('products', ['getProducts']),
    isDisabled() {
      return this.product === '' || this.product.length < 2
    }
  },
  methods: {
    ...mapActions('products', ['addProduct']),
    resetForm() {
      this.product = ''
      this.status = true
    },
    setProduct() {
      const isExists = this.getProducts.find(product => product.Produto === this.product);
      if (isExists) {
        this.EventEmitter.$emit('openAlert', { message: 'Produto ja existe!', type: 'danger' })
        return
      }

      this.addProduct({ 
        Produto: this.product, 
        Ativo: this.status 
      })
      this.resetForm()
      this.EventEmitter.$emit('openAlert', { message:'Produto cadastrado com sucesso!', type: 'success' })
    }
  }
}
</script>