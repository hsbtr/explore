<template>
  <div class="more">
    <Swiper ref="mySwiper" :options="slideOptions">
      <swiper-slide v-for="(val, key) in moreList" :key="key">
        <router-link to="" class="slide-item flex-x-cen flex-align-cen" v-for="(value, index) in val" :key="value.id">
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
            text: "蒹葭"
          },
          {
            id: uuid(),
            text: "酥酥"
          },
          {
            id: uuid(),
            text: "画虎"
          },
          {
            id: uuid(),
            text: "蒹葭"
          },
          {
            id: uuid(),
            text: "酥酥"
          },
          {
            id: uuid(),
            text: "画虎"
          },
          {
            id: uuid(),
            text: "蒹葭"
          },
          {
            id: uuid(),
            text: "酥酥"
          },
          {
            id: uuid(),
            text: "画虎"
          }
        ],
        [
          {
            id: uuid(),
            text: "蒹葭"
          },
          {
            id: uuid(),
            text: "酥酥"
          },
          {
            id: uuid(),
            text: "画虎"
          },
          {
            id: uuid(),
            text: "蒹葭"
          },
          {
            id: uuid(),
            text: "酥酥"
          },
          {
            id: uuid(),
            text: "画虎"
          },
          {
            id: uuid(),
            text: "蒹葭"
          },
          {
            id: uuid(),
            text: "酥酥"
          },
          {
            id: uuid(),
            text: "画虎"
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
  methods: {
    onSwiper() {},
    onSlideChange() {}
  },
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
        .slide-item {
          width: 150px;
          height: 150px;
          border: solid 1px red;
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
