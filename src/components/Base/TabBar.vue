<template>
  <div class="tab-bar">
    <router-link
      :to="setToLink(val)"
      class="item"
      v-for="(val, index) in tabBarList"
      :key="val.id"
      @click.native="itemAction(val, index)"
    >
      <img :src="setIconLink(val, index)" alt="" />
      <span :class="[actionItem === index ? 'select-text' : '']">{{
        val.text
      }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { rewriteDns } from "@/libs/utils";

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
      actionItem: 0,
      isAsk: false
    };
  },
  computed: {
    ...mapState(["tabBarList"])
  },
  watch: {
    tabKey(val) {
      this.actionItem = val;
    }
  },
  methods: {
    ...mapActions(["getTabBarList"]),
    // tab-item 选中
    itemAction(val, index) {
      this.actionItem = index;
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
    setIconLink(val, index) {
      if (val.defaultIcon && val.selectIcon) {
        return this.actionItem === index
          ? rewriteDns(val.selectIcon)
          : rewriteDns(val.defaultIcon);
      }
      return "";
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
