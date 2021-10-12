import {onMounted, h, getCurrentInstance, toRefs, ref, watch} from 'vue';
import events from './events';
const config = {
  dataSource: Object,
  config: Object,
  width: {
    default: '100%'
  },
  height: {
    default: 'auto'
  },
  getFGInstance: Function
};

const fusionGridComponent = (FusionGrid) => {
  return {
    name: 'vue-fusiongrid',
    props : config,
    setup(props, { emit }) {
      const reactiveProps = toRefs(props);
      const reactiveDataSource = toRefs(props.dataSource);
      const __el = ref(null);
      let grid;
      let {width, height} = props;
      let prevConfig = {};

      if (width !== '100%') width = width + 'px';
      if (height !== 'auto') height = height + 'px';
       
      onMounted(function () {
        __el.value = getCurrentInstance().proxy.$el;
        __el.value.style.width = width;
        __el.value.style.height = height;
        renderGrid();
        if (props.getFGInstance) {
          props.getFGInstance(grid);
        } else {
          console.log('no fg instance');
        }
      });

      const attachEventListeners = () => {
        events.forEach(event => {
          let callback = (...args) => emit(event, ...args);
          grid.on(event, callback);
        });
      };

      const setPrevConfig = (config) => {
        if (config) prevConfig = JSON.parse(JSON.stringify(config));
      };

      const getPrevOptions = () => (prevConfig);

      const renderGrid = () => {
        if (grid) {
          grid.dispose();
        }
        const { dataSource, config = {} } = props;
        grid = new FusionGrid(__el.value, dataSource.data, config);
        attachEventListeners();
        grid.render();
        setPrevConfig(props.config);
      };

      const updateGridConfig = () => {
        const _previousConfig = getPrevOptions();
        for (const cKey of Object.keys(props.config)) {
          if (_previousConfig && props.config[cKey] !== _previousConfig[cKey]) {
            const fnName = `set${cKey.charAt(0).toUpperCase()}${cKey.slice(1)}`;
            if (grid[fnName]) grid[fnName](props.config[cKey]);
          }
        }
        setPrevConfig(props.config);
      };

      const updateData = () => {
        if (grid) {
          grid.setDataTable(props.dataSource.data);
        } else {
          console.log('No grid found.');
        }
      };

      watch(
        reactiveDataSource.data,
        () => { updateData(); },
        { deep: false }
      );

      watch(
        reactiveProps.config,
        () => { updateGridConfig(); },
        { deep: true }
      );
    },

    render() {
      return h('div', {
        class: 'vue-fusiongrid'
      });
    }
  };
};

export default fusionGridComponent;