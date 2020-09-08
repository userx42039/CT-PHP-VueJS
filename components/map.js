
const map = Vue.component('map-component', {
  data() {
    return {}
  },
  mounted() {
    $(document).ready(() => {
      demo.initGoogleMaps();
    });
  },
  template: '#map'
})

