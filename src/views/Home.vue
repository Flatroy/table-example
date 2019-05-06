<template>
    <div class="container">
        <main-header>
            <search-bar/>
        </main-header>

        <main-table>
        </main-table>
    </div>
</template>

<script>

import SearchBar from '@/components/SearchBar'
import MainHeader from '@/components/MainHeader'
import MainTable from '@/components/MainTable'

export default {
  name: 'home',
  components: {
    MainTable,
    MainHeader,
    SearchBar
  }
}
</script>
