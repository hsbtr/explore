<template>
  <div class="chat-room flex-y">
    <nav-bar :is-button="true">
      <template v-slot:bubble>
        <div class="bubbles flex-x-cen flex-align-cen">
          <span>12</span>
        </div>
      </template>
      <template v-slot:bar-title>
        <div class="bar-page-name flex-x-cen">
          <span>个人</span>
        </div>
        <div class="bar-page-status flex-x-cen">
          <router-link to="">
            在线
          </router-link>
        </div>
      </template>
      <template v-slot:menu-box>
        <router-link to="" class="icon-phone"></router-link>
        <router-link to="" class="icon-menu"></router-link>
      </template>
    </nav-bar>
    <div class="chat-main" @click.stop="shutComponent">
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
          <textarea
            :rows="textarea_rows"
            v-model="current_text"
            ref="textarea"
          ></textarea>
        </label>
        <button :class="{ 'change-but-bg': !!current_text }">发送</button>
      </div>
      <div class="action-func flex-x flex-align-cen">
        <button
          v-for="(val, index) in functionList"
          :key="val.name"
          :class="val.className"
          @click="openElement(val, index)"
        ></button>
      </div>
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import { uuid } from "@/libs/utils";
import MoreFunc from "@/components/ChatRoom/MoreFunc";
import NavBar from "@/components/Base/NavBar";

export default {
  name: "ChatRoom",
  data() {
    return {
      textarea_rows: 1, // 表示textarea最大可现实行数
      current_text: "", // 当前输入框的内容
      textContentHeight: 0, // 输入框的内容高度
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
      ], // 聊天记录列表
      functionList: [
        {
          name: "voice",
          className: "icon-v",
          isShow: false
        },
        {
          name: "picture",
          className: "icon-p",
          isShow: false
        },
        {
          name: "camera",
          className: "icon-c",
          isShow: false
        },
        {
          name: "action",
          className: "icon-a",
          isShow: false
        },
        {
          name: "face",
          className: "icon-f",
          isShow: false
        },
        {
          name: "more",
          className: "icon-m",
          isShow: false,
          componentName: "more-func"
        }
      ], // 功能按钮列表
      currentComponent: "" // 动态组件名
    };
  },
  methods: {
    // 信息长按事件
    showFunc() {},
    // 打开功能组件
    openElement(val, key) {
      if (val && key) {
        if (this.currentComponent === val.componentName)
          return (this.currentComponent = "");
        this.currentComponent = val.componentName;
      }
    },
    // 聊天信息页点击事件 用来关闭功能组件
    shutComponent() {
      this.currentComponent = "";
    },
    // 设置列表样式
    setClassName(val) {
      return ["mess-item flex-y", val.is_self ? "flex-x-end" : "flex-x-start"];
    }
  },
  watch: {
    // 监听输入框中的值变化 获取当前内容的高度 同时给按钮说明当前有值
    current_text(val) {
      if (val) {
        this.textContentHeight = this.$refs.textarea.scrollHeight;
      }
    },
    // 判断前后两次的内容高度变化 去除旧值为0的情况
    textContentHeight(val, oldVal) {
      if (oldVal && val !== oldVal && val > oldVal && this.textarea_rows <= 6) {
        this.textarea_rows++;
      } else if (val < oldVal && this.textarea_rows > 1) {
        this.textarea_rows--;
      }
    }
  },
  computed: {},
  components: {
    MoreFunc,
    NavBar
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.chat-room {
  height: 100%;
  .chat-main {
    flex: 1;
    min-height: 400px;
    overflow: hidden;
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
            size: 16px;
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
            border: none;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text-box {
            flex: 1;
            height: 100%;
            span {
              text-align: left;
              font-size: 18px;
              color: #ffffff;
              padding: 10px;
              border-radius: 5px;
              background: #00bfff;
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
    //flex: auto;
    padding: 0 15px 20px 15px;
    z-index: 99;
    box-shadow: 0 -1px 5px rgba(128, 128, 128, 0.4);
    background: #dcdcdc;
    .chat-input {
      padding: 20px 0;
      overflow: hidden;
      .input-box {
        flex: 1;
        //max-height: 215px;
        overflow: hidden;
        padding: 12px 10px;
        border-radius: 20px;
        background: #ffffff;
        textarea {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          z-index: 99;
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
        border-radius: 10px;
        background: #808080;
      }
      .change-but-bg {
        background: #00bfff;
      }
    }
    .action-func {
      height: 60px;
      padding: 0 15px;
      button {
        width: 50px;
        height: 50px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-color: transparent;
      }
      .icon-v {
        background-image: url("../assets/img/icon-voice.png");
      }
      .icon-p {
        background-image: url("../assets/img/icon-picture.png");
      }
      .icon-c {
        background-image: url("../assets/img/icon-camera.png");
      }
      .icon-a {
        background-image: url("../assets/img/icon-action.png");
      }
      .icon-f {
        background-image: url("../assets/img/icon-face.png");
      }
      .icon-m {
        background-image: url("../assets/img/icon-more.png");
      }
    }
  }
}
</style>
