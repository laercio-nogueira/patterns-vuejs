<template>
  <div class="card">
    <Heading1Atom text="Produtos" class="mb-4"/>
    <InputGenericAtom
      textLabel="Produto"
      type="text" 
      name="produto" 
      placeholder="Preencha o nome do produto" 
      required
      value=""
      @input="(value) => console.log(value)"
      class="mb-3"
    />

    <Heading5Atom text="Ativo" />
    <CheckBoxGenericAtom
      textLabel="sim"
      value="sim"
      @change="(value) => console.log(value)"
      checked
    />

    <CheckBoxGenericAtom
      textLabel="não"
      value="nao"
      @change="(value) => console.log(value)"
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
import CheckBoxGenericAtom  from '../atoms/CheckBoxGenericAtom'
import Heading1Atom from '../atoms/Heading1Atom'
import Heading5Atom from '../atoms/Heading5Atom'

export default {
  name: 'ProductsPage',
  components: {
    ButtonGenericAtom,
    InputGenericAtom,
    CheckBoxGenericAtom,
    Heading1Atom,
    Heading5Atom
  }
}
</script>