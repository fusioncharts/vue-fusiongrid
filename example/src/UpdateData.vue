<template>
  <h2>Update data</h2>
  <vue-fusiongrid :dataSource="dataSource" :width="950" :height="600"  />
  <button class="button" @click="updateData"> Update data </button>
</template>
<script>
import {data, schema} from './data';
import FusionGrid from 'fusiongrid';
import { reactive} from 'vue';
export default {
  name: 'UpdateData',

  setup() {
    let dataSource = reactive({}); 
    const dataStore = new FusionGrid.DataStore();
    dataSource.data = dataStore.createDataTable(data, schema, {
        enableIndex: false,
    });

    const updateData = () => {
      data.push([21, "SuvThar", "Mahindra", 313618, "Satons, ly."]);
      dataSource.data = dataStore.createDataTable(data, schema, {
        enableIndex: false,
      });
    }

    return {
      dataSource: dataSource,
      updateData
    }
  }
}
</script>


