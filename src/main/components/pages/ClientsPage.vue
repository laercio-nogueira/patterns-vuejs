<template>
  <div>
    <Heading1Atom text="Clientes" class="mb-4" />
    <InputGenericAtom
      textLabel="Nome"
      type="text" 
      name="nome" 
      placeholder="Preencha o nome" 
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
import Heading1Atom from '#components/atoms/Heading1Atom'

export default {
  name: 'ClientsPage',
  components: {
    ButtonGenericAtom,
    InputGenericAtom,
    CheckBoxGenericAtom,
    Heading1Atom,
  }
}
</script>