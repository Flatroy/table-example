<template>
    <div class="filters">
        <div>
            <label class="custom-checkbox" v-for="(field, index) of fields" :key="index">
                <input type="checkbox" :checked="field" @change="filter(index, field)"/> {{ index }}
            </label>
        </div>
    </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'Checkboxes',

  data () {
    return {
    }
  },
  computed: {

    ...mapGetters(['fields'])
  },
  methods: {
    filter (key, val) {
      this.$store.commit('filterField', key, val)
    }
  }
  // mounted () {
  //   this.$store.dispatch('getUsers')
  // }
}
</script>
