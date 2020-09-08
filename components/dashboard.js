
const dashboard = Vue.component('dashboard-component', {
  data() {
    return {}
  },
  mounted() {
    $(document).ready(() => {
      demo.initChartsPages();
    });
  },
  template: '#dashboard'
})

