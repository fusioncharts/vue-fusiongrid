import fusionGridComponent from './vue-fusiongrid';
const install = (app, fusionGrid) => {
  let fgComponent = fusionGridComponent(fusionGrid);
  app.component(fgComponent.name, fgComponent);
};

export {fusionGridComponent};
export default install;

