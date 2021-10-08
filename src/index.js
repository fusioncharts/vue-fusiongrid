import fusionGridComponent from "./vue-fusiongrid";
const install = (app, fusionGrid) => {
  console.log("install invoked")
  let fgComponent = fusionGridComponent(fusionGrid);
  app.component(fgComponent.name, fgComponent);
};

export {fusionGridComponent};
export default install;

