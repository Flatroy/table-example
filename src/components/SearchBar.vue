<template>
    <div>
        <input type="search" class="form-control" placeholder="Search Tables"
               v-model.trim="searchText" @input="search"
        />
    </div>
</template>

<script>

export default {
  name: 'SearchBar',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    search () {
      this.$store.commit('searchUser', this.searchText)
    }
  }
}
</script>
