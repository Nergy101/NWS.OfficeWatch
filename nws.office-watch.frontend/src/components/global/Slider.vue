<template>
  <div class="slider">
    <swiper
      class="slider__swiper"
      :spaceBetween="40"
      :speed="1500"
      :slides-per-view="1"
      @swiper="onSwiper"
      loop
      noSwiping
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide
        class="slider__slide"
        v-for="(image, index) in dataset"
        :key="index"
      >
        <p v-if="title && index % 2">divided</p>
        <img
          :src="image.url"
          class="slider__image"
          :style="sliderStyle"
          alt="image.name"
        />
        <p v-if="title && !(index % 2)">not divided</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import VLazyImage from "v-lazy-image";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
export default {
  name: "App",
  props: ["dataset", "title", "sliderStyle"],
  components: {
    Swiper,
    SwiperSlide,
    // VLazyImage,
  },

  data() {
    return {
      swiper: null,
    };
  },

  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },

    handleSlideTo() {
      this.swiper.slideTo(3);
    },
  },
  computed: {
    imagePath() {
      return `@assets/img/Homepage1.jpg`;
    },
  },
};
</script>
<style lang="scss">
.slider {
  &__swiper {
    height: inherit;
  }
  &__image {
    width: 100%;
    object-fit: cover;
  }
  &__slide {
    width: 80%;
  }
}
</style>
