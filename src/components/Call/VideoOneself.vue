<template>
  <div class="oneself">
    <video
      autoplay
      playsinline
      muted="muted"
      :src="srcData"
      ref="localVideo"
    ></video>
  </div>
</template>

<script>
// 这里面处理mediaDevices老版兼容
import "../../libs/navigator";
import { Toast } from "vant";
// 本机的视角
export default {
  name: "VideoOneself",
  data() {
    return {
      srcData: ""
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
  created() {
    this.getUserMedia({ video: true, audio: true });
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.oneself {
  height: 100%;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
