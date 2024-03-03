<template>
<div>
  <HeaderGenericAtom logo="Sistema XYZ"/>
  <router-view />
</div>
</template>

<script>
import HeaderGenericAtom from '../atoms/HeaderGenericAtom'

export default {
  name: 'HomePage',
  components: {
    HeaderGenericAtom
  }
}
</script>