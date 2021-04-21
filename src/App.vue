<template>
  <div id="app">
    <router-view :page-name="pageName" />
    <tab-bar :current-page-path="currentPagePath" v-show="tabBarShow"></tab-bar>
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
      pageName: "",
      currentPage: {},
      currentPagePath: ""
    };
  },
  computed: {},
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      if (to.path) {
        const arr = ["/Home", "/Find", "/Mess", "/My"];
        const index = to.path.indexOf("/", 1);
        this.tabBarShow =
          index !== -1
            ? arr.indexOf(to.path.slice(0, index)) !== -1
            : arr.indexOf(to.path) !== -1;
        this.currentPagePath = to.path;
      }
      if (to.meta.title) this.pageName = to.meta.title;
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
