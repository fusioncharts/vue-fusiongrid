<template>
  <h2>Basic Grid View</h2>
  <vue-fusiongrid :dataSource="dataSource" :width="950" :height="600"  />
</template>
<script>
import {data, schema} from './data';
import FusionGrid from 'fusiongrid';
import { reactive} from 'vue';
export default {
  name: 'Basic',

  setup() {
    let dataSource = reactive({}); 
    const dataStore = new FusionGrid.DataStore();
    dataSource.data = dataStore.createDataTable(data, schema, {
        enableIndex: false,
    });

    return {
      dataSource: dataSource
    }
  }
}
</script>


