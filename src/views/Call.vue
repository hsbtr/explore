<template>
  <div class="call">
    <video-omari v-show="false"></video-omari>
    <video-oneself></video-oneself>
    <div class="but-footer">
      <button class="foot-item"></button>
      <button class="foot-item bg-red">挂断</button>
      <button class="foot-item"></button>
    </div>
  </div>
</template>

<script>
import VideoOmari from "@/components/Call/VideoOmari";
import VideoOneself from "@/components/Call/VideoOneself";
export default {
  name: "Call",
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  components: {
    VideoOmari,
    VideoOneself
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.call {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .but-footer {
    width: 100%;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    bottom: 50px;
    .foot-item {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      font-size: 16px;
      color: #ffffff;
      border-radius: 50%;
    }
    .bg-red {
      background: #ff0000;
    }
  }
}
</style>
