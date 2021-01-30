<template>
  <div class="chat-room flex-y">
    <div class="head-nav flex-x flex-align-cen">
      <router-link to=""></router-link>
      <span>狗子</span>
      <router-link to=""></router-link>
    </div>
    <div class="chat-main">
      <ul class="main-scroll">
        <li class="mess-item" v-for="(val, index) in chatRecord" :key="val.id">
          <div class="item-lift">
            <router-link to="">
              <img src="" alt="" />
            </router-link>
            <span @touchstart.stop.prevent="">{{ val.message }}</span>
          </div>
          <div class="item-right">
            <span>{{ val.message }}</span>
            <router-link to="">
              <img src="" alt="" />
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { uuid } from "@/libs/utils";

export default {
  name: "ChatRoom",
  data() {
    return {
      chatRecord: [
        {
          id: uuid(),
          message: "三艘",
          create_time: "2020 - 12 - 12 12:12:50"
        },
        {
          id: uuid(),
          message: "三艘",
          create_time: "2020 - 12 - 12 12:12:50"
        },
        {
          id: uuid(),
          message: "三艘",
          create_time: "2020 - 12 - 12 12:12:50"
        },
        {
          id: uuid(),
          message: "三艘",
          create_time: "2020 - 12 - 12 12:12:50"
        },
        {
          id: uuid(),
          message: "三艘",
          create_time: "2020 - 12 - 12 12:12:50"
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
.chat-room {
  height: 100%;
  .head-nav {
    height: 100px;
    padding: 20px 10px;
    box-shadow: 0 1px 5px rgba(211, 211, 211, 0.8);
    a {
      width: 60px;
      height: 60px;
    }
    span {
      flex: 1;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: #000000;
      font-size: 26px;
      font-weight: 500;
    }
  }
}
</style>
