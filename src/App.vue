<template>
  <div id="app">
    <router-view />
    <tab-bar :tab-key="tabBarKey"></tab-bar>
  </div>
</template>
<script>
import TabBar from "@/components/Base/TabBar";

export default {
  name: "App",
  data() {
    return {
      tabBarKey: 0
    };
  },
  computed: {},
  watch: {
    $route(to, from) {
      console.log(from);
      if (to.meta.types === "TabBar") {
        console.log(to);
        this.tabBarKey = to.meta.keys;
      }
    }
  },
  methods: {
    addSig() {
      this.$http.user.sigIn({ name: "三火" });
    }
  },
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
