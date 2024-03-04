<template>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th v-for="(legend, index) in legends" :key="index">{{ legend.text || legend }}</th>
        <th v-if="link"></th>
        <th v-if="remove"></th>
      </tr>
    </thead>
    <tbody v-if="items.length > 0">
      <tr  v-for="(item, index) in items" :key="index" >
        <td v-for="(legend, index) in legends" :key="index">{{ item[legend.value || legend] }}</td>
        <td v-if="link" class="text-center">
          <a class="table__icon-link" @click="$emit('link', item.id)">
            <i class="fa fa-link" />
          </a>
        </td>
        <td v-if="remove" class="text-center">
          <a class="table__icon-delete" @click="$emit('remove', item.id)">
            <i class="fa fa-trash" />
          </a>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td :colspan="totalColSpan" class="text-center">Ainda não possui dados</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    legends: Array,
    items: Array,
    link: Boolean,
    remove: Boolean
  },
  computed: {
    totalColSpan() {
      return this.legends.length + (this.link ? 1 : 0) + (this.remove ? 1 : 0)
    }
  }
};
</script>

<style scoped lang="scss">
.table {
  th, td {
    font-family: $font-default;
  }

  &__icon-link, &__icon-delete {
    cursor: pointer;
  }

  &__icon-link, {
    color: $color-primary;
  }

  &__icon-delete {
    color: $color-red;
  }
}
</style>
