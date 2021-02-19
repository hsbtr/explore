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
// 本机的视角
export default {
  name: "VideoOneself",
  props: {
    streamData: {
      type: Object
    }
  },
  data() {
    return {
      srcData: ""
    };
  },
  methods: {},
  watch: {},
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
