<template>
  <div class="omari">
    <video playsinline autoplay ref="omari-video"></video>
  </div>
</template>

<script>
// 对方的视角
export default {
  name: "VideoOmari",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.omari {
  width: 100%;
}
</style>
