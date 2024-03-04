<template>
    <div class="container">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                  <th v-for="(legend, index) in legends" :key="index">{{legend}}</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td v-for="(legend, index) in legends" :key="index">{{ item[legend] }}</td>
              </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {
  props: {
    legends: Array,
    items: Array
  },
};
</script>
