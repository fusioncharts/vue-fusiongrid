<template>
<div>
<Basic />
</div>
</template>

<script>
import Basic from "./Basic";
import {  reactive} from 'vue';
import FusionGrid from 'fusiongrid';
export default {
  name: 'App',
  components: {
    Basic
  },

  setup() {
    
    let dataSource = reactive({}); 
    const schema = [
    {
      name: "Rank",
      type: "number",
    },
    {
      name: "Model",
    },
    {
      name: "Make",
    },
    {
      name: "Units Sold",
      type: "number",
    },
    {
      name: "Assembly Location",
    },
  ];
  const data = [
    [1, "F-Series", "Ford", 896526, "Claycomo, Mo."],
    [2, "Pickup", "Ram", 633694, "Warren, Mich."],
    [3, "Silverado", "Chevrolet", 575600, "Springfield, Ohio"],
    [4, "RAV4", "Toyota", 448071, "Georgetown, Ky."],
    [5, "CR-V", "Honda", 384168, "Greensburg, Ind."],
    [6, "Rogue", "Nissan", 350447, "Smyrna, Tenn."],
    [7, "Equinox", "Chevrolet", 346048, "Arlington, Tex."],
    [8, "Camry", "Toyota", 336978, "Georgetown, Ky."],
    [15, "Highlander", "Toyota", 239438, "Princeton, Ind."],
    [16, "Sierra", "GMC", 232325, "Flint, Mich."],
    [17, "Wrangler", "Jeep", 228032, "Toledo, Ohio"],
    [18, "Altima", "Nissan", 209183, "Smyrna, Tenn."],
    [19, "Cherokee", "Jeep", 191397, "Belvidere, Ill."],
    [20, "Sentra", "Nissan", 184618, "Canton, Miss."],
  ];

const gridConfigData = {
  // layout: { type: "card" },
  layout: { type: "compact" },
  rowOptions: {
    style: { "background-color": "#ddd" },
    hover: {
      enable: true,
      style: { "background-color": "white" },
    },
  },
};
const gridConfig = reactive(gridConfigData);
  const dataStore = new FusionGrid.DataStore();
  dataSource.data = dataStore.createDataTable(data, schema, {
      enableIndex: false,
  });

  const rowClickedHandler = () => {
    alert("row clicked handler")
  }

  const updateData = () => {
    console.log("update data is invoked ",)
    data.push([21, "Suman", "Nissan", 184618, "Canton, Miss."]);
    console.log("hello guys");
      dataSource.data = dataStore.createDataTable(data, schema, {
        enableIndex: false,
      });
  
  }

  const updateConfig = () => {
    console.log("update data is invoked ")
    gridConfig.layout.type = "card";
  }

  const getFGinstanace = (grid) => {
    console.log("grid instance ", grid);
  }
 
  return {
    dataSource: dataSource,
    config:gridConfig,
    rowClickedHandler,
    updateData,
    updateConfig,
    getFGinstanace
  }
  
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
