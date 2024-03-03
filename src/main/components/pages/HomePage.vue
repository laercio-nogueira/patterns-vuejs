<template>
<div>
  <HeaderGenericAtom logo="Sistema XYZ"/>
  <MenuSidebar />
</div>
</template>

<script>
import HeaderGenericAtom from '../atoms/HeaderGenericAtom'
import MenuSidebar from '../molecules/MenuSidebar'

export default {
  name: 'HomePage',
  components: {
    HeaderGenericAtom,
    MenuSidebar
  }
}
</script>