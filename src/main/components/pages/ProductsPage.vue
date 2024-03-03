<template>
  <div>
    <h1> Produtos </h1>
    <InputGenericAtom
      textLabel="Produto"
      type="text" 
      name="produto" 
      placeholder="Preencha o nome do produto" 
      required
      value=""
      @input="(value) => console.log(value)"
    />
    <br/>
    <CheckBoxGenericAtom
      textLabel="sim"
      value="sim"
      @change="(value) => console.log(value)"
      :checked="false"
    />

    <CheckBoxGenericAtom
      textLabel="nao"
      value="nao"
      @change="(value) => console.log(value)"
      checked
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

export default {
  name: 'ProductsPage',
  components: {
    ButtonGenericAtom,
    InputGenericAtom,
    CheckBoxGenericAtom
  }
}
</script>