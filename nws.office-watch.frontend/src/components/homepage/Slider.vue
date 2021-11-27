<template>
  <div class="slider">
    <swiper
      class="slider__swiper"
      :spaceBetween="40"
      :speed="2000"
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
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image.url" class="slider__image" alt="image.name" />
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

  components: {
    Swiper,
    SwiperSlide,
    // VLazyImage,
  },

  data() {
    return {
      swiper: null,
      images: [
        {
          name: "office 1",
          // WHY DOES THE REQUIRE STATEMENT HAVE TO BE IN THE OBJECT??
          url: require("@/assets/img/Homepage1.jpg"),
        },

        {
          name: "office 2",
          // WHY DOES THE REQUIRE STATEMENT HAVE TO BE IN THE OBJECT??
          url: require("@/assets/img/Homepage2.jpg"),
        },
        {
          name: "office 3",
          // WHY DOES THE REQUIRE STATEMENT HAVE TO BE IN THE OBJECT??
          url: require("@/assets/img/Homepage3.jpg"),
        },
        {
          name: "office 4",
          // WHY DOES THE REQUIRE STATEMENT HAVE TO BE IN THE OBJECT??
          url: require("@/assets/img/Homepage4.jpg"),
        },
        {
          name: "office 5",
          // WHY DOES THE REQUIRE STATEMENT HAVE TO BE IN THE OBJECT??
          url: require("@/assets/img/Homepage5.jpg"),
        },
      ],
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
    width: 600px;
  }
  &__image {
    height: 550px;
    width: 100%;
    object-fit: cover;
  }
  &__slide {
    width: 80%;
  }
}
</style>
