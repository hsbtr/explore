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
// 自定义构造函数
function MediaStream(
  active,
  id,
  onactive,
  onaddtrack,
  oninactive,
  onremovetrack
) {
  this.active = active;
  this.id = id;
  this.onactive = onactive;
  this.onaddtrack = onaddtrack;
  this.oninactive = oninactive;
  this.onremovetrack = onremovetrack;
}

// 本机的视角
export default {
  name: "VideoOneself",
  props: {
    streamData: {
      author: MediaStream
    }
  },
  data() {
    return {
      srcData: ""
    };
  },
  methods: {},
  watch: {
    streamData(val) {
      const videos = this.$refs.localVideo;
      try {
        videos.srcObject = val;
      } catch (e) {
        if (e.name !== "TypeError") throw e;
        const compat = window.URL || window.webkitURL;
        this.srcData = compat.createObjectURL(val);
      }
      videos.onloadedmetadata = function() {
        videos.play();
      };
    }
  },
  computed: {},
  created() {},
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
