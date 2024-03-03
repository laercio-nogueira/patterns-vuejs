<template>
  <div class="card">
    <Heading1Atom text="Clientes" class="mb-4" />
    <InputGenericAtom
      textLabel="Nome"
      type="text" 
      name="nome" 
      placeholder="Preencha o nome" 
      required
      value=""
      @input="(value) => console.log(value)"
      class="mb-3"
    />
    <InputGenericAtom
      textLabel="Documento"
      type="text" 
      name="documento" 
      placeholder="Preencha o documento" 
      required
      value=""
      @input="(value) => console.log(value)"
      class="mb-3"
    />
    <InputGenericAtom
      textLabel="Telefone"
      type="text" 
      name="telefone" 
      placeholder="Preencha o telefone" 
      required
      value=""
      @input="(value) => console.log(value)"
      class="mb-3"
    />
    <InputGenericAtom
      textLabel="Email"
      type="text" 
      name="email" 
      placeholder="Preencha o email" 
      required
      value=""
      @input="(value) => console.log(value)"
      class="mb-3"
    />
    
    <Heading5Atom text="Ativo" />
    <ToggleSwitchAtom
      @change="(value) => console.log(value)"
      checked
      class="mb-3"
    />

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
import Heading1Atom from '#components/atoms/Heading1Atom'
import Heading5Atom from '#components/atoms/Heading5Atom'

export default {
  name: 'ClientsPage',
  components: {
    ButtonGenericAtom,
    InputGenericAtom,
    ToggleSwitchAtom,
    Heading1Atom,
    Heading5Atom
  }
}
</script>