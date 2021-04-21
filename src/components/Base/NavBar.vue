<template>
  <div class="nav-bar flex-x flex-align-cen">
    <div class="bar-left flex-x flex-align-cen">
      <button v-back v-show="isButton"></button>
      <slot name="bubble"></slot>
    </div>
    <div class="bar-cen-box flex-y flex-x-cen flex-align-cen">
      <slot name="bar-title">
        <div class="bar-page-name flex-x-cen">
          <span>{{ title }}</span>
        </div>
      </slot>
    </div>
    <div class="bar-right flex-x flex-align-cen">
      <slot name="menu-box"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String
    },
    isButton: {
      type: Boolean,
      default: false
    }
  },
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
.nav-bar {
  height: 120px;
  padding: 20px 15px;
  z-index: 99;
  position: relative;
  box-shadow: 0 1px 5px rgba(128, 128, 128, 0.4);
  background: #ffffff;
  .bar-left,
  .bar-right {
    width: 120px;
    height: 60px;
    //border: red solid 1px;
  }
  .bar-left {
    position: relative;
    button {
      width: 50px;
      height: 50px;
      background: url("../../assets/img/icon-back.png") no-repeat 0 0 / 100%
        100%;
    }
    .bubbles {
      padding: 10px;
      overflow: hidden;
      border-radius: 20px;
      background: #ff0000;
      span {
        color: #ffffff;
        font-size: 16px;
        //-webkit-transform: scale(0.75, 0.75);
      }
    }
  }
  .bar-right {
    a {
      width: 50px;
      height: 50px;
    }
    .icon-phone {
      background: url("../../assets/img/icon-phone.png") no-repeat 0 0 /100% 100%;
    }
    .icon-menu {
      background: url("../../assets/img/icon-menu.png") no-repeat 0 0 /100% 100%;
    }
  }
  .bar-cen-box {
    flex: 1;
    height: 100%;
    .bar-page-name {
      a,
      span {
        font-size: 24px;
        font-weight: 700;
      }
    }
    .bar-page-status {
      a,
      span {
        font-size: 16px;
        font-weight: 300;
        //-webkit-transform: scale(0.75, 0.75);
      }
    }
  }
}
</style>
