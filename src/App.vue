<template>
  <div id="app">
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from "@/components/Base/TabBar";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    addSig() {
      this.$http.user.sigIn({ name: "三火" });
    },
    setMap() {
      const actions = {
        "1": ["a", "99"],
        "2": ["b", "88"],
        "3": ["c", "77"],
        "4": ["d", "66"],
        default: ["e", "55"]
      };
      const onClick = status => {
        let action = actions[status] || actions["default"];
        let name = action[0];
        let values = action[1];
        console.log(name);
        console.log(values);
      };
      onClick(1);
    }
  },
  computed: {},
  watch: {},
  components: {
    TabBar
  },
  beforeCreate() {
    // this.$http.base.csrfToken();
  },
  created() {
    // this.addSig();
    this.setMap();
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
