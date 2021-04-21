<template>
  <div class="release">
    <div class="user-box flex">
      <router-link to="" class="user-to flex-x flex-align-cen">
        <div class="user-photo">
          <img src="" alt="" />
        </div>
        <div class="user-status">
          <div class="names">火神不太热</div>
          <div class="tags">哈规划</div>
        </div>
        <div class="user-link">
          <span>个人主页</span>
        </div>
      </router-link>
    </div>
    <div>
      <router-link to="">
        <span></span>
        <span></span>
      </router-link>
    </div>
  </div>
</template>

<script>
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
  components: {}
};
</script>

<style scoped lang="scss">
.release {
  overflow: hidden;
  padding: 0 15px;
  background: #ffffff;
  z-index: 98;
  .user-box {
    padding: 20px 0;
    .user-to {
      width: 100%;
      overflow: hidden;
      .user-photo {
        width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: 50%;
        border: none;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user-status {
        flex: 1;
        text-align: left;
        padding: 0 15px;
        .names {
          font-size: 24px;
          font-weight: 600;
        }
        .tags {
          font-size: 16px;
        }
      }
      .user-link {
        span {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
