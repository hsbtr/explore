<template>
  <div class="tab-bar">
    <router-link to="" @click="itemAction()"></router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabBarList: []
    };
  },
  methods: {
    /**
     * 查询底部按钮列表
     * */
    getTabBarLst() {
      let _this = this;
      this.$http.base
        .getTabBar({ is: 1 })
        .then(res => {
          if (res.result && res.state === 200) {
            _this.tabBarList = res.result;
          }
        })
        .catch();
    },
    /**
     * tab-item 选中
     * */
    itemAction() {

    }
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {
    this.getTabBarLst();
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.tab-bar {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
