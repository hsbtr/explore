<template>
  <div class="chat-room flex-y">
    <div class="head-nav flex-x flex-align-cen">
      <div class="nav-back">
        <button @click="goBack"></button>
        <div class="mess-num-bubble flex-x-cen">
          <span>12</span>
        </div>
      </div>
      <span class="title">狗子</span>
      <router-link to=""></router-link>
    </div>
    <div class="chat-main">
      <ul class="main-scroll">
        <li
          :class="setClassName(val)"
          v-for="(val, index) in chatRecord"
          :key="val.id"
        >
          <div class="create-times flex-x-cen flex-align-cen">
            <span>{{ val.create_time }}</span>
          </div>
          <div class="item-left flex-x-start right-pg" v-if="!val.is_self">
            <router-link to="">
              <img src="" alt="" />
            </router-link>
            <div
              class="text-box flex-x-start"
              @touchstart.stop.prevent="showFunc(index)"
            >
              <span>{{ val.message }}</span>
            </div>
          </div>
          <div class="item-right flex-x-end left-pg" v-else>
            <div
              class="text-box flex-x-end"
              @touchstart.stop.prevent="showFunc(index)"
            >
              <span>{{ val.message }}</span>
            </div>
            <router-link to="">
              <img src="" alt="" />
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer-func">
      <div class="chat-input flex">
        <label class="input-box flex">
          <textarea v-model="current_text"></textarea>
          <span>{{ current_text }}</span>
        </label>
        <button>发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import { uuid } from "@/libs/utils";

export default {
  name: "ChatRoom",
  data() {
    return {
      textarea_rows: 1,
      current_text: "",
      chatRecord: [
        {
          id: uuid(),
          message: "三艘",
          is_self: true,
          create_time: "2020 - 12 - 12 12:12:50"
        },
        {
          id: uuid(),
          message: "三艘",
          is_self: false,
          create_time: "2020 - 12 - 12 12:12:50"
        },
        {
          id: uuid(),
          message: "三艘",
          is_self: true,
          create_time: "2020 - 12 - 12 12:12:50"
        },
        {
          id: uuid(),
          message: "三艘",
          is_self: true,
          create_time: "2020 - 12 - 12 12:12:50"
        },
        {
          id: uuid(),
          message:
            "作为第二个和第三个参数。这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。在 3.1.0+，可以省略第二个和第三个参数，此时如果支持 Promise，router.push 或 router.replace 将返回一个 Promise",
          is_self: false,
          create_time: "2020 - 12 - 12 12:12:50"
        }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    showFunc() {}
  },
  watch: {
    current_text(val) {
      console.log(val.split("//r?/n/").length);
    }
  },
  computed: {
    setClassName() {
      return function(val) {
        return [
          "mess-item flex-y",
          val.is_self ? "flex-x-end" : "flex-x-start"
        ];
      };
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.chat-room {
  height: 100%;
  .head-nav {
    height: 100px;
    padding: 20px 15px;
    z-index: 99;
    box-shadow: 0 1px 5px rgba(128, 128, 128, 0.4);
    background: #ffffff;
    .nav-back {
      width: 60px;
      height: 60px;
      position: relative;
      button {
        width: 100%;
        height: 100%;
      }
      .mess-num-bubble {
        width: 35px;
        height: 35px;
        position: absolute;
        top: 10px;
        left: 61px;
        overflow: hidden;
        border-radius: 50%;
        background: #ff0000;
        span {
          flex: 1;
          text-align: center;
          line-height: 40px;
          font-size: 8px;
          color: #ffffff;
        }
      }
    }
    a {
      width: 60px;
      height: 60px;
    }
    .title {
      flex: 1;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: #000000;
      font-size: 26px;
      font-weight: 500;
    }
  }
  .chat-main {
    flex: 1;
    z-index: 98;
    background: #ffffff;
    .main-scroll {
      padding: 20px 0;
      .mess-item {
        padding: 0 15px;
        margin: 20px 0;
        .create-times {
          margin: 15px 0;
          color: #000000;
          font: {
            size: 10px;
            weight: 400;
          }
        }
        .item-left,
        .item-right {
          flex: 1;
          a {
            width: 60px;
            height: 60px;
            overflow: hidden;
            margin: 0 10px;
            border-radius: 50%;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text-box {
            flex: 1;
            height: auto;
            span {
              font-size: 16px;
              color: #000000;
            }
          }
        }
        .left-pg {
          padding: 0 0 0 80px;
        }
        .right-pg {
          padding: 0 80px 0 0;
        }
      }
    }
  }
  .footer-func {
    flex: auto;
    z-index: 99;
    box-shadow: 0 -1px 5px rgba(128, 128, 128, 0.4);
    background: #dcdcdc;
    .chat-input {
      padding: 20px 15px;
      overflow: hidden;
      .input-box {
        flex: 1;
        min-height: 60px;
        max-height: 215px;
        overflow: hidden;
        border-radius: 20px;
        position: relative;
        textarea {
          width: 100%;
          height: 100%;
          padding: 15px 10px;
          position: absolute;
          top: 0;
          left: 0;
          border: none;
          outline: none;
          z-index: 99;
          border-radius: 20px;
          background: #ffffff;
          font: {
            size: 16px;
            weight: 400;
          }
        }
        span {
          z-index: 9;
          opacity: 0;
          color: #ffffff;
          font: {
            size: 16px;
            weight: 400;
          }
        }
      }
      button {
        width: 100px;
        height: 60px;
        margin-left: 10px;
        font-size: 14px;
        color: #ffffff;
        border-radius: 20px;
      }
    }
  }
}
</style>
