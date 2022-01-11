
<template>
  <h2>Example with grid config</h2>
  <vue-fusiongrid :dataSource="dataSource" :config="config" :width="950" :height="600"  />
</template>
<script>
import {data, schema} from './data';
import FusionGrid from 'fusiongrid';
import { reactive } from 'vue';
export default {
  name: 'GridConfig',

  setup() {
    let dataSource = reactive({}); 
    const dataStore = new FusionGrid.DataStore();
    const gridConfigData = {
      layout: { type: "compact" },
      rowOptions: {
        style: { "background-color": "#ddd" },
        hover: {
          enable: true,
          style: { "background-color": "#eff" },
        },
      },
    };


    dataSource.data = dataStore.createDataTable(data, schema, {
        enableIndex: false,
    });

    return {
      dataSource: dataSource,
      config: gridConfigData
    }
  }
}
</script>


