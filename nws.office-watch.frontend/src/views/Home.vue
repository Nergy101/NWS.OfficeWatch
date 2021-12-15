<template>
  <div class="home">
    <div class="segment-1">
      <div class="segment-1__overlay">
        <div class="segment-1__title">
          <h1 class="segment-1__title__heading">
            Looking for Shared Office Space?
          </h1>
          <p class="segment-1__title__sub-heading">
            We'll help you find your next working space
          </p>
        </div>
        <SearchDialog
          @submit="searchOfficeSpaces()"
          class="segment-1__search"
        ></SearchDialog>
      </div>
      <Slider
        class="segment-1__slider"
        :dataset="searchImages"
        :sliderStyle="'height:85vh'"
      ></Slider>
    </div>
    <div class="segment-2">
      <!-- <Slider
        class="segment-2__slider"
        :dataset="segmentTwoImages"
        :title="true"
      ></Slider> -->
    </div>
  </div>
</template>

<script>
import Slider from "../components/global/Slider.vue";
import SearchDialog from "../components/homepage/SearchDialog.vue";
export default {
  components: {
    Slider,
    SearchDialog,
  },
  data() {
    return {
      searchImages: [
        {
          name: "office 1",
          // WHY DOES THE REQUIRE STATEMENT HAVE TO BE IN THE OBJECT??
          url: require("@/assets/img/Homepage1.jpg"),
        },

        {
          name: "office 2",
          url: require("@/assets/img/Homepage2.jpg"),
        },
        {
          name: "office 3",
          url: require("@/assets/img/Homepage3.jpg"),
        },
        {
          name: "office 4",
          url: require("@/assets/img/Homepage4.jpg"),
        },
        {
          name: "office 5",
          url: require("@/assets/img/Homepage5.jpg"),
        },
      ],
      segmentTwoImages: [
        {
          name: "office 1",
          // WHY DOES THE REQUIRE STATEMENT HAVE TO BE IN THE OBJECT??
          url: require("@/assets/img/Homepage1.jpg"),
        },

        {
          name: "office 2",
          url: require("@/assets/img/Homepage2.jpg"),
        },
        {
          name: "office 3",
          url: require("@/assets/img/Homepage3.jpg"),
        },
        {
          name: "office 4",
          url: require("@/assets/img/Homepage4.jpg"),
        },
        {
          name: "office 5",
          url: require("@/assets/img/Homepage5.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.home {
}
.segment-1 {
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  &__overlay {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 8rem;
  }
  &__title {
    width: 35vw;
    margin-top: 10rem;
    &__heading {
      font-size: 4.5rem;
      font-weight: 700;
      color: $fontColorPrimaryLighten1;
    }
    &__sub-heading {
      font-weight: 500;
      color: $fontColorPrimaryLighten2;
    }
  }
  &__slider {
    grid-column: 6 / 12;
  }
  &__search {
    width: 55vw;
    margin-top: 5rem;
  }
}
@media screen and (min-width: 2000px) {
  html {
    font-size: 125%;
  }
}
</style>
