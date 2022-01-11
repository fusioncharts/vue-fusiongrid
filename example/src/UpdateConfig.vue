<template>
  <h2>Update Config</h2>
  <vue-fusiongrid :dataSource="dataSource" :config="config" :width="950" :height="600"  />
  <button class="button" @click="updateConfig"> Update config </button>
</template>
<script>
import {data, schema} from './data';
import FusionGrid from 'fusiongrid';
import { reactive} from 'vue';
export default {
  name: 'updateConfig',

  setup() {
    let dataSource = reactive({}); 
    const dataStore = new FusionGrid.DataStore();
    dataSource.data = dataStore.createDataTable(data, schema, {
        enableIndex: false,
    });

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
    const  gridConfig = reactive(gridConfigData);

    const updateConfig = () => {
      gridConfig.layout.type = "card";
    }

    return {
      dataSource: dataSource,
      config: gridConfig,
      updateConfig
    }
  }
}
</script>


