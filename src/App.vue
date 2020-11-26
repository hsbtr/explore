<template>
  <div id="app">
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from "./components/Base/TabBar";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    addSig() {
      this.$http.user.sigIn({ name: "三火" });
    }
  },
  computed: {},
  watch: {},
  components: {
    TabBar
  },
  beforeCreate() {
    this.$http.base.csrfToken();
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
