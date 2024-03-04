<template>
  <select class="form-select" @input="$emit('input', $event.target.value)">
    <option selected disabled>Selecione</option>
    <option 
      v-for="(item, index) in items" 
      :key="index"
      :value="item.id"
      >
        {{ item[field] }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectGenericAtom',
  props: {
    items: Array,
    selected: String,
    field: String,
  }
}
</script>
