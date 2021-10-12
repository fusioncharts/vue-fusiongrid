# vue-fusiongrid

A simple and lightweight `VueJS` component for `FusionGrid` JavaScript Charting Library. The `vue-fusiongrid` wrapper lets you easily include G in your `VueJS` projects.


## Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Working with APIs](#working-with-apis)
  - [Working with Events](#working-with-events)
- [Quick Start](#quick-start)
- [Examples](#examples)


## Getting Started

### Requirements

- **Node.js**, **NPM/Yarn** installed globally in your OS.
- **FusionGrid** and **Vue** installed in your project, as detailed below:

## Installation

**Direct Download**
All binaries are located on our [github repository](https://github.com/FusionGrid/vue-fusiongrid/).

**Install from NPM**

```bash
npm install vue-fusiongrid --save
```

**Install from Yarn**

```bash
yarn add vue-fusiongrid
```

### Usage

There are two ways of adding `vue-fusiongrid` component in your project

**Registering globally as a plugin**
Import `vue`, `vue-fusiongrid` and FusionGrid in main app file.

```js

import { createApp } from 'vue'
import App from './App.vue'

// import Fusiongrid modules and resolve dependency

import FusionGrid from "fusiongrid";
import "fusiongrid/dist/fusiongrid.css";
import VueFusiongrid from "vue-fusiongrid";

```

Now, register it as plugin in Vue object

```js
const app = createApp(App);
app.use(VueFusiongrid, FusionGrid);

```

This way is recommended when you want component (`vue-fusiongrid` ) available from everywhere in your app.

**Registering locally in your component**
Import the chart component from `vue-fusiongrid` package in your component file and register it locally.

```js
// import FusionGrid modules and resolve dependency
import FusionGrid from 'fusiongrid';
import "fusiongrid/dist/fusiongrid.css";

import {fusionGridComponent} from "vue-fusiongrid";
const VueFusiongrid = fusionGridComponent(FusionGrid);
export default {
  name: 'App',
  components: {
    VueFusiongrid
  }
}
```

This way is recommended when you want component (`vue-fusiongrid` ) only in specific components of your app.

## Working with APIs

To call APIs we will need the fusiongrid object. To get the fusiongrid object from the component we can use props getFGInstance

```html
<vue-fusiongrid
  :width="width"
  :height="height"
  :dataSource="dataSource"
  :config="config"
  :getFGinstanace="getFGinstanace"
>
</vue-fusiongrid>
```

Now, we can access the fusiongrid object from `fusiongridObj` and can invoke API from the object.

```js
export default {
  name: 'App',
  components: {
    VueFusiongrid
  },
  setup() {
    
    const getFGInstance  = (fusionGridObj)  => {
      console.log(fusionGridObj);
    }

    return {
      getFGInstance
    }
  }
}
```

## Working with Events

To attach event listeners to FusionGrid, you can use the `v-on` or `@` operator in the vue-fusiongrid component.

```html
<vue-fusiongrid
  :width="width"
  :height="height"
  :dataSource="dataSource"
  :config="config"
  @rowClicked="rowClickedHandler"
/>

```

`rowClickedHandler` will be in invoked when user clicks on any row from fusion grid.

## Quick Start

Here is a basic sample that shows how to create a chart using `vue-fusiongrid`:

```js

  import { createApp } from 'vue'
  import App from './App.vue'

  import FusionGrid from "fusiongrid";
  import "fusiongrid/dist/fusiongrid.css";
  import VueFusiongrid from "vue-fusiongrid";
  const app = createApp(App);

  // register VueFusionGrid component
  app.use(VueFusiongrid, FusionGrid);
  app.mount('#app')

// File where the grid is being integrated
import FusionGrid from "fusiongrid";
export default {
  name: 'App',
  setup() {
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

    const dataStore = new FusionGrid.DataStore();
    const dataSource = dataStore.createDataTable(data, schema, {
        enableIndex: false,
    });
  
    return {
      dataSource: {data: dataSource}
    }
  }
}

```

Here's HTML template for the above example:

```html
<div id="app">
  <vue-fusiongrid
    :dataSource="dataSource"
    :width="900"
    :height="600"
  />
  Fusingrid will render here...
</div>
```

## Examples
- You can see the various examples at [example](https://github.com/FusionGrid/vue-fusiongrid/tree/master/example/src/).
