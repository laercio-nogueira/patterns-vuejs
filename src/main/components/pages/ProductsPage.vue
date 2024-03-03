<template>
  <div class="card">
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
      @click="() => alert('Enviado!')"
    />
  </div>
</template>

<script>
import ButtonGenericAtom from '../atoms/ButtonGenericAtom'
import InputGenericAtom from '../atoms/InputGenericAtom'
import ToggleSwitchAtom  from '../atoms/ToggleSwitchAtom'
import Heading1Atom from '../atoms/Heading1Atom'
import Heading5Atom from '../atoms/Heading5Atom'

export default {
  name: 'ProductsPage',
  components: {
    ButtonGenericAtom,
    InputGenericAtom,
    ToggleSwitchAtom,
    Heading1Atom,
    Heading5Atom
  },
  data: () => ({
    product: '',
    status: true,
  })
}
</script>