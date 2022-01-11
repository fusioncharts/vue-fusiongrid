<template>
  <div id="gridContainer">
    <Basic />
    <GridConfig />
    <UpdateData />
    <GridEvent />
    <UpdateConfig />
  </div>
</template>

<script>
import Basic from "./Basic";
import GridConfig from "./GridConfig";
import UpdateData from "./UpdateData";
import GridEvent from "./GridEvent";
import UpdateConfig from "./UpdateConfig";
export default {
  name: 'App',
  components: {
    Basic,
    GridConfig,
    UpdateData,
    GridEvent,
    UpdateConfig
  },
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
  margin: 0 auto;
}
#app .vue-fusiongrid {
    position: relative;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>
