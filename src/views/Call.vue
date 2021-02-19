<template>
  <div class="call">
    <video-omari v-show="false"></video-omari>
    <video-oneself :stream-data="streamData"></video-oneself>
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
// 这里面处理mediaDevices老版兼容
import "../libs/navigator";
import {Toast} from "vant";

export default {
  name: "Call",
  data() {
    return {
      streamData: null
    };
  },
  methods: {
    // 访问用户媒体设备的兼容方法
    getUserMedia(constrains) {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // 最新标准API 内部处理了兼容老版
        navigator.mediaDevices
          .getUserMedia(constrains)
          .then(this.success)
          .catch(this.error);
      }
    },
    success(stream) {
      const videos = this.$refs.localVideo;
      console.log(stream);
      if ("srcObject" in videos) {
        try {
          videos.srcObject = stream;
        } catch (e) {
          if (e.name !== "TypeError") throw e;
          this.srcData = URL.createObjectURL(stream);
        }
      } else {
        const compat = window.URL || window.webkitURL;
        this.srcData = compat.createObjectURL(stream);
      }
      videos.onloadedmetadata = function() {
        videos.play();
      };
    },
    error(err) {
      Toast("设备调用摄像头失败！");
      console.log(err.name + ":" + err.message);
    }
  },
  watch: {},
  computed: {},
  components: {
    VideoOmari,
    VideoOneself
  },
  created() {
    this.getUserMedia({ video: true, audio: true });
  },
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
