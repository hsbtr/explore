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
import { getTabBar } from "../../api/base";
import { localStorageSet, localStorageGet, uuid } from "../../libs/utils";
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
      actionItem: 0,
      isAsk: false
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
      let tabBar = localStorageGet("tabBarList");
      let tabList = [
        {
          id: uuid(),
          name: "home",
          text: "首页",
          sort: 1,
          src: "/Home",
          defaultIcon: require("../../assets/img/home.png"),
          selectIcon: require("../../assets/img/home1.png")
        },
        {
          id: uuid(),
          name: "find",
          text: "发现",
          sort: 2,
          src: "/Find",
          defaultIcon: require("../../assets/img/find.png"),
          selectIcon: require("../../assets/img/find1.png")
        },
        {
          id: uuid(),
          name: "mess",
          text: "消息",
          sort: 3,
          src: "/Mess",
          defaultIcon: require("../../assets/img/mess.png"),
          selectIcon: require("../../assets/img/mess1.png")
        },
        {
          id: uuid(),
          name: "my",
          text: "我的",
          sort: 4,
          src: "/My",
          defaultIcon: require("../../assets/img/my.png"),
          selectIcon: require("../../assets/img/my1.png")
        }
      ];
      if (_this.isAsk) {
        return;
      }
      getTabBar({ is: 1 })
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
            localStorageSet("tabBarList", data);
            _this.isAsk = true;
          } else {
            if (!tabBar) tabBar = tabList;
            _this.tabBarList = tabBar;
          }
        })
        .catch(err => {
          console.log(err);
          if (!tabBar) tabBar = tabList;
          _this.tabBarList = tabBar;
        });
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
