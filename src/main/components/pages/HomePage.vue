<template>
  <div class="card">
    <Heading1Atom text="Principal" class="mb-4"/>

    <ListDataAtom 
      :legends="['Name', 'Documento', 'Telefone', 'Email', 'Ativo']"
      :items="getClients"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Heading1Atom from '#components/atoms/Heading1Atom'
import ListDataAtom from '../atoms/ListDataAtom'

export default {
  name: 'HomePage',
  components: {
    Heading1Atom,
    ListDataAtom
  },
  computed: {
    ...mapGetters('clients', ['getClients'])
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