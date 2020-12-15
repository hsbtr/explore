<template>
  <div class="tab-bar">
    <router-link
      :to="val.src"
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
  props: {
    tabKey: {
      type: Number,
      required: true,
      validator: function(value) {
        return [0, 1, 2, 3].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      tabBarList: [],
      actionItem: 0
    };
  },
  computed: {},
  watch: {
    tabKey(val) {
      this.actionItem = val;
    }
  },
  methods: {
    /**
     * 查询底部按钮列表
     * */
    getTabBarLst() {
      let _this = this;
      this.$api.base
        .getTabBar({ is: 1 })
        .then(res => {
          console.log(res);
          if (res.result && res.state === 200) {
            let data = res.result;
            for (let i = 0; i < data.length; i++) {
              if (data[i].name) {
                data[i]["src"] =
                  "/" +
                  data[i].name.slice(0, 1).toUpperCase() +
                  data[i].name.slice(1);
              }
            }
            _this.tabBarList = data;
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
    padding: 10px 0;
    .select-text {
      color: #000000;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
