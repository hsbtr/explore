<template>
  <div class="session">
    <div class="head-func flex-x">
      <router-link
        :to="{ path: val.path, query: { keys: val.keys, index: index } }"
        class="func-bar flex-y"
        v-for="(val, index) in funcBar"
        :key="val.keys"
      >
        <img :src="val.icon" alt="" />
        <span>{{ val.text }}</span>
      </router-link>
    </div>
    <div class="main-list flex-y">
      <router-link to="/ChatRoom" class="chat-link flex-x flex-align-cen">
        <img src="" alt="" />
        <div class="chat-data flex-y">
          <div class="chat-data-top flex-x flex-align-end">
            <span class="chat-names">狗子</span>
            <span class="chat-time">2020-12-12</span>
          </div>
          <div class="chat-data-foot flex-x flex-align-end">
            <span class="chat-content">12345</span>
            <div class="chat-num flex flex-align-cen">
              <span class="chat-num-font">99</span>
            </div>
          </div>
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
          icon: require("../../assets/img/remark.png"),
          text: "评论",
          path: ""
        },
        {
          keys: 2,
          icon: require("../../assets/img/enjoy.png"),
          text: "喜欢",
          path: ""
        },
        {
          keys: 3,
          icon: require("../../assets/img/note.png"),
          text: "通知",
          path: "/Call"
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
    padding: 10px 15px;
    overflow: hidden;
    .func-bar {
      width: 100px;
      font-size: 16px;
      color: #000000;
      padding: 0 20px;
      img {
        width: 60px;
        height: 60px;
      }
      span {
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        color: #000000;
      }

    }
  }
  .main-list {
    .chat-link {
      padding: 10px 15px;
      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      .chat-data {
        flex: 2;
        .chat-data-top {
          height: 45px;
          .chat-names {
            line-height: 40px;
            font-size: 18px;
            color: #000000;
          }
          .chat-time {
            font-size: 12px;
            color: #808080;
          }
        }
        .chat-data-foot {
          height: 45px;
          .chat-content {
            font-size: 16px;
            color: #808080;
          }
          .chat-num {
            width: 30px;
            height: 100%;
            .chat-num-font {
              width: 100%;
              height: 30px;
              overflow: hidden;
              text-align: center;
              line-height: 30px;
              font-size: 12px;
              color: #ffffff;
              border-radius: 50%;
              background: #ff0000;
            }
          }
        }
      }
    }
  }
}
</style>
