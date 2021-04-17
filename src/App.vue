<template>
  <div id="app">
    <router-view :page-name="pageName" />
    <tab-bar :tab-key="tabBarKey" v-show="tabBarShow"></tab-bar>
  </div>
</template>
<script>
import { sigIn } from "./api/user";
import TabBar from "@/components/Base/TabBar";

export default {
  name: "App",
  data() {
    return {
      tabBarKey: 0,
      tabBarShow: true,
      pageName: ""
    };
  },
  computed: {},
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      if (to.meta.title) this.pageName = to.meta.title;
      if (to.meta.types === "TabBar") {
        this.tabBarShow = true;
        this.tabBarKey = to.meta.keys;
      } else {
        this.tabBarShow = false;
      }
    }
  },
  methods: {
    addSig() {
      sigIn({ name: "三火" });
    }
  },
  components: {
    TabBar
  },
  beforeCreate() {
    // this.$api.base.csrfToken();
  },
  created() {
    // this.addSig();
  },
  mounted() {}
};
</script>

<style lang="scss">
#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
