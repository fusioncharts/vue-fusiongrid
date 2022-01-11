<template>
  <h2>Grid Event </h2>
  <vue-fusiongrid :dataSource="dataSource" :width="950" :height="600"  @rowClicked="rowClickedHandler"/>
  
</template>
<script>
import {data, schema} from './data';
import FusionGrid from 'fusiongrid';
import { reactive} from 'vue';
export default {
  name: 'GridEvent',

  setup() {
    let dataSource = reactive({}); 
    const dataStore = new FusionGrid.DataStore();
    dataSource.data = dataStore.createDataTable(data, schema, {
        enableIndex: false,
    });

    const rowClickedHandler = () => {
      alert("Clicked on row")
    }

    return {
      dataSource: dataSource,
      rowClickedHandler
    }
  }
}
</script>


