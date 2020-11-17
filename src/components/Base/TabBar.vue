<template>
  <div class="tab-bar">
    <router-link
      to=""
      class="item"
      v-for="(val, index) in tabBarList"
      :key="val.id"
      @click.native="itemAction(val, index)"
    >
      <img
        :src="[actionItem === index ? val.selectIcon : val.defaultIcon]"
        alt=""
      />
      <span :class="[actionItem === index ? 'select-text' : '']">{{
        val.text
      }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabBarList: [],
      actionItem: 0
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
          console.log(res);
          if (res.result && res.state === 200) {
            _this.tabBarList = res.result;
          }
        })
        .catch();
    },
    /**
     * tab-item 选中
     * */
    itemAction(val, index) {
      this.actionItem = index;
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
  position: fixed;
  bottom: 0;
  left: 0;
  .item {
    flex: 1;
    //height: 60px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    color: #8a8a8a;
    padding: 5px 0;
    .select-text {
      color: #000000;
    }
  }
}
</style>
