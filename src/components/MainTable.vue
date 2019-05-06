<template>
    <div class="main-table">
        <checkboxes/>
        <table class="table">
            <thead>
            <tr>
                <th v-show="fields.date">Date</th>
                <th v-show="fields.name">Name</th>
                <th v-show="fields.address">Address</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user of users" :key="user.id">
                <td v-show="fields.date">{{ user.date | moment("YYYY-MM-DD") }}</td>
                <td v-show="fields.name">{{ user.name }}</td>
                <td v-show="fields.address">{{ user.address }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Checkboxes from './CheckBoxes'

export default {
  name: 'MainTable',
  components: { Checkboxes },
  computed: {
    ...mapGetters(['users', 'fields'])
  },
  mounted () {
    this.$store.dispatch('getUsers')
  }
}
</script>

<style lang="scss" scoped>
    .main-table {
        margin-top: 80px;
    }

    .table {
        margin-top: 30px;
        border-spacing: 0;
        width: 100%;
        border-collapse: separate;
        tr {
            border-spacing: 0;
            text-align: left;
            vertical-align: inherit;
            td {
                border-spacing: 0;
                vertical-align: top;
                border-bottom: 1px solid #dee2e6;
                font-size: 16px;
                padding: 15px;
            }
            th {
                border-spacing: 0;
                vertical-align: top;
                border-bottom: 1px solid #dee2e6;
                font-size: 14px;
                padding: 15px;
                color: #495057;
            }
        }
    }
</style>
