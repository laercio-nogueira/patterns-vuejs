<template>
  <div class="card">
    <Heading1Atom text="Clientes" class="mb-4" />
    <InputGenericAtom
      textLabel="Nome"
      type="text" 
      name="nome" 
      placeholder="Preencha o nome" 
      required
      :value="name"
      @input="(value) => name = value"
      class="mb-3"
    />
    <InputGenericAtom
      textLabel="Documento"
      type="text" 
      name="documento" 
      placeholder="Preencha o documento" 
      required
      :value="document"
      @input="(value) => document = value"
      class="mb-3"
      mask="###.###.###-##"
    />
    <InputGenericAtom
      textLabel="Telefone"
      type="text" 
      name="telefone" 
      placeholder="Preencha o telefone" 
      required
      :value="phone"
      @input="(value) => phone = value"
      class="mb-3"
      mask='(##) #####-####'
    />
    <InputGenericAtom
      textLabel="Email"
      type="text" 
      name="email" 
      placeholder="Preencha o email" 
      required
      :value="email"
      @input="(value) => email = value"
      class="mb-3"
    />
    
    <Heading5Atom text="Ativo" />
    <ToggleSwitchAtom
      @change="(value) => status = value"
      :checked="status"
      class="mb-3"
    />

    <ButtonGenericAtom
      buttonText="Enviar"
      @click="setClient"
      width="100px"
      :disabled="isDisabled"
    />

  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  },
  data: () => ({
    name: '',
    status: true,
    document: '',
    phone: '',
    email: ''
  }),
  computed: {
    isDisabled() {
      const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/
      return this.name === '' || this.document.length < 14 || this.phone.length < 15 || !regexEmail.test(this.email)
    }
  },
  methods: {
    ...mapActions('clients', ['addClient']),
    setClient() {
      this.addClient({
        Name: this.name,
        Documento: this.document,
        Telefone: this.phone,
        Email: this.email,
        Ativo: this.status
      })

      this.name = ''
      this.document = ''
      this.phone = ''
      this.email = ''
      this.status = true

      this.EventEmitter.$emit('openAlert', { message: 'Cliente Cadastrado com sucesso!', type: 'success' })
    }
  }
}
</script>