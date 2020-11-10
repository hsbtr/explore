<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    addSig() {
      this.$http.base.sigIn({ name: "小火苗" });
      console.log(this);
    }
  },
  computed: {},
  watch: {},
  beforeCreate() {
    // this.$http.base.csrfToken();
  },
  created() {
    // this.addSig();
  },
  mounted() {}
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
