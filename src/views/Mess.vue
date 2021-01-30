<template>
  <div class="mess">
    <div class="head-nav flex-x flex-align-cen">
      <div class="nav-bars flex-x-cen">
        <router-link to="/Mess/Dynamic" active-class="active-class"
          >动态</router-link
        >
        <router-link to="/Mess/SessionList" active-class="active-class"
          >消息</router-link
        >
      </div>
      <router-link to="" class="to-seek"></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Mess",
  props: {},
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.mess {
  height: 100%;
  background: rgba(211, 211, 211, 0.3);
  .head-nav {
    position: sticky;
    top: 0;
    padding: 20px 10px 20px 40px;
    box-shadow: 0 2px 5px rgba(211, 211, 211, 0.8);
    background: #ffffff;
    .nav-bars {
      flex: 2;
      height: 50px;
      a {
        line-height: 50px;
        padding: 0 10px;
        font-size: 26px;
        color: #808080;
      }
      .active-class {
        color: #000000;
      }
    }
    .to-seek {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
