<template>
  <div class="my-warp">
    <nav-bar :title="pageName"></nav-bar>
    <user-release></user-release>
  </div>
</template>

<script>
import NavBar from "@/components/Base/NavBar";
import UserRelease from "@/components/my/UserRelease";
export default {
  name: "My",
  props: {
    pageName: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  components: {
    NavBar,
    UserRelease,
  }
};
</script>

<style scoped lang="scss">
.my-warp {
  height: 100%;
}
</style>
