<template>
  <div class="release">
    <nav-bar :title="pageName"></nav-bar>
    <router-link to="">
      <img src="" alt="" />
      <div></div>
      <div>
        <span>个人主页</span>
      </div>
    </router-link>
    <div>
      <router-link to="">
        <span></span>
        <span></span>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Base/NavBar";
export default {
  name: "UserRelease",
  props: {
    pageName: {
      type: String
    }
  },
  data() {
    return {};
  },
  watch: {
    pageName(val) {
      console.log(val);
    }
  },
  components: {
    NavBar
  }
};
</script>

<style scoped lang="scss">
.release {
  overflow: hidden;
}
</style>
