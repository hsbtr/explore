<template>
  <div class="tab-bar">
    <router-link
      :to="setToLink(val)"
      :class="setClassName(val)"
      v-for="(val, index) in tabBarList"
      :key="val.id"
      @click.native="itemAction(val, index)"
    >
      <img :src="setIconLink(val)" alt="" />
      <span class="select-text">
        {{ val.text }}
      </span>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { rewriteDns, sessionStorageSet, sessionStorageGet } from "@/libs/utils";

export default {
  name: "TabBar",
  props: {
    currentPagePath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      actionItem: 0,
      selectItem: "",
      isAsk: false
    };
  },
  computed: {
    ...mapState(["tabBarList"])
  },
  watch: {},
  methods: {
    ...mapActions(["getTabBarList"]),
    // tab-item 选中
    itemAction(val, index) {
      this.actionItem = index;
      this.selectItem = this.setToLink(val);
      sessionStorageSet("tab-bar-active-path", this.selectItem);
    },
    // 设置路由跳转地址
    setToLink(val) {
      if (val.src) {
        return val.src;
      } else {
        if (val.name) {
          return "/" + val.name.slice(0, 1).toUpperCase() + val.name.slice(1);
        }
      }
    },
    // 设置icon图标的链接
    setIconLink(val) {
      let path =
        this.currentPagePath ||
        sessionStorageGet("tab-bar-active-path") ||
        "/Home";
      if (val.defaultIcon && val.selectIcon) {
        return path.indexOf(this.setToLink(val)) !== -1
          ? rewriteDns(val.selectIcon)
          : rewriteDns(val.defaultIcon);
      }
      return "";
    },
    // 返回样式名
    setClassName(val) {
      let path =
        this.currentPagePath ||
        sessionStorageGet("tab-bar-active-path") ||
        "/Home";
      return path.indexOf(this.setToLink(val)) !== -1
        ? "select-item item"
        : "item";
    }
  },
  beforeCreate() {},
  created() {
    this.getTabBarList({ type: 1 });
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
  box-shadow: 0 -2px 2px rgba(211, 211, 211, 0.8);
  background: #ffffff;
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
    img {
      width: 24px;
      height: 24px;
    }
  }
  .select-item {
    .select-text {
      color: #000000;
    }
  }
}
</style>
