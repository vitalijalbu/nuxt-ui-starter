<template>
    <el-page-header :title="'Ruoli e permessi'">
      <template #extra>
        <div class="flex items-center">
          <el-button type="primary">Aggiungi</el-button>
        </div>
      </template>

    </el-page-header>
<Datatable :data="data" :columns="userColumns"/>
</template>

<script lang="ts" setup>
import { t } from "@/services/i18n";
import { useUserStore } from "@/stores/user";
import { userColumns } from "@/columns/user";

import { ref } from "vue";

import { can } from "@/services/ability";
import { debounce } from "@/services/utils/generalUtils";
import tableData from "@/components/datatable/tableData.vue";

const data = [
  { date: '2016-05-04', name: 'Aleyna Kutzner', address: 'Lohrbergstr. 86c, Süd Lilli, Saarland' },
  { date: '2016-05-03', name: 'Helen Jacobi', address: '760 A Street, South Frankfield, Illinois' },
  { date: '2016-05-02', name: 'Brandon Deckert', address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen' },
  { date: '2016-05-01', name: 'Margie Smith', address: '23618 Windsor Drive, West Ricardoview, Idaho' },
];

const userStore = useUserStore();
const createUserModal = ref<boolean>(false);

const onUserCreate = () => {
  createUserModal.value = true;
};

const onCloseUserCreate = (refresh: boolean = false) => {
  createUserModal.value = false;
  if (refresh) {
    userStore.advancedFilter.page = 1;
    userStore.advancedFilter.search = undefined;
    userStore.index();
  }
};

const debouncedSearch = debounce((value: string) => onUserSearch(value), 300);

const onUserSearch = (searchValue: string) => {
  userStore.advancedFilter.page = 1;
  userStore.advancedFilter.search = searchValue;
  userStore.index();
};
</script>
