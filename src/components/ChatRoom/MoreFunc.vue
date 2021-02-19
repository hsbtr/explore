<template>
  <div class="more">
    <Swiper ref="mySwiper" :options="slideOptions">
      <swiper-slide v-for="(val, key) in moreList" :key="key">
        <router-link
          :to="value.path"
          class="slide-item flex-x-cen flex-align-cen flex-y"
          v-for="(value, index) in val"
          :key="value.id"
        >
          <img src="" alt="" />
          <span>{{ value.text + index }}</span>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper as SwiperCore, Pagination } from "swiper/core";
import getAwesomeSlide from "vue-awesome-swiper/dist/exporter";
import { uuid } from "@/libs/utils";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Pagination]);
const { Swiper, SwiperSlide } = getAwesomeSlide(SwiperCore);

export default {
  name: "MoreFunc",
  data() {
    return {
      moreList: [
        [
          {
            id: uuid(),
            path: "",
            text: "语音通话"
          },
          {
            id: uuid(),
            path: "/Call",
            text: "视频通话"
          },
          {
            id: uuid(),
            path: "",
            text: "画虎"
          },
          {
            id: uuid(),
            path: "",
            text: "酥酥"
          },
          {
            id: uuid(),
            path: "",
            text: "画虎"
          },
          {
            id: uuid(),
            path: "",
            text: "蒹葭"
          },
          {
            id: uuid(),
            path: "",
            text: "酥酥"
          },
          {
            id: uuid(),
            path: "",
            text: "画虎"
          }
        ],
        [
          {
            id: uuid(),
            path: "",
            text: "蒹葭"
          },
          {
            id: uuid(),
            path: "",
            text: "酥酥"
          },
          {
            id: uuid(),
            path: "",
            text: "画虎"
          },
          {
            id: uuid(),
            path: "",
            text: "蒹葭"
          },
          {
            id: uuid(),
            path: "",
            text: "酥酥"
          },
          {
            id: uuid(),
            path: "",
            text: "画虎"
          },
          {
            id: uuid(),
            path: "",
            text: "蒹葭"
          },
          {
            id: uuid(),
            path: "",
            text: "酥酥"
          }
        ]
      ],
      slideOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {},
  watch: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.more {
  //height: 800px;
  overflow: hidden;
  .swiper-container {
    width: 100%;
    .swiper-wrapper {
      width: 100%;
      .swiper-slide {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;
        .slide-item {
          width: 120px;
          height: 120px;
          margin: 15px;
          border: solid 1px red;
          img {
            width: 80px;
            height: 80px;
          }
          span {
            color: #000000;
            font-size: 12px;
          }
        }
      }
    }
    .swiper-pagination {
      position: relative;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
