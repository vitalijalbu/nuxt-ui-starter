<template>
<Datatable
  :columns="[
    { prop: 'date', label: 'Date', },
    { prop: 'date2', label: 'Date 2' },
    { prop: 'name', label: 'Name' },
    { prop: 'address', label: 'Address', tooltip: true }
  ]"
  :data="tableData"
  :selectable="true"
/>
</template>

<script lang="ts" setup>
import Datatable from '@/components/datatable/DataTable.vue';


interface User {
  date: string
  date2: string
  name: string
  address: string
}
const tableData: User[] = [
  {
    date: '2016-05-04',
    date2: '2016-05-04',
    name: 'Aleyna Kutzner',
    address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
  },
  {
    date: '2016-05-03',
    date2: '2016-05-03',
    name: 'Helen Jacobi',
    address: '760 A Street, South Frankfield, Illinois',
  },
  {
    date: '2016-05-02',
    date2: '2016-05-03',
    name: 'Brandon Deckert',
    address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
  },
  {
    date: '2016-05-01',
    date2: '2016-05-03',
    name: 'Margie Smith',
    address: '23618 Windsor Drive, West Ricardoview, Idaho',
  },
]
</script>