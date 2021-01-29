<template>
  <div class="session">
    <div class="head-func flex-x-cen">
      <router-link
        :to="{ path: val.path, query: { keys: val.keys, index: index } }"
        class="func-bar flex-y"
        v-for="(val, index) in funcBar"
        :key="val.path"
      >
        <img :src="val.icon" alt="" />
        <span>{{ val.text }}</span>
      </router-link>
    </div>
    <div class="main-list flex-y">
      <router-link to="/ChatRoom" class="chat-link flex-x">
        <img src="" alt="" />
        <div class="chat-data flex-y">
          <span class="chat-names">狗子</span>
          <span class="chat-content">12345</span>
        </div>
        <div class="chat-tag flex-y">
          <span class="chat-time">2020-12-12</span>
          <span class="chat-num">1</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionList",
  data() {
    return {
      funcBar: [
        {
          keys: 1,
          // icon: require(""),
          text: "评论",
          path: ""
        },
        {
          keys: 2,
          // icon: require(""),
          text: "喜欢",
          path: ""
        },
        {
          keys: 3,
          // icon: require(""),
          text: "通知",
          path: ""
        }
      ]
    };
  },
  methods: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.session {
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  .head-func {
    .func-bar {
      width: 100px;
      height: 100px;
      font-size: 16px;
      color: #000000;
    }
  }
  .main-list {
    .chat-link {
      padding: 10px 15px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      .chat-data {
        flex: 2;
        font-size: 14px;
        .chat-names {
          color: #000000;
        }
        .chat-content {
          color: #808080;
        }
      }
      .chat-tag {
        width: 100px;
        .chat-time {
          font-size: 12px;
          color: #808080;
        }
        .chat-num {
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          font-size: 12px;
          color: #ffffff;
          border-radius: 50%;
          background: #ff0000;
        }
      }
    }
  }
}
</style>
