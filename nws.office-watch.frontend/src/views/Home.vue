<template>
  <div class="home">
    <h1 class="home__title">Looking for Shared Office Space?</h1>
    <Slider class="home__slider"></Slider>
  </div>
</template>

<script>
import Slider from "../components/homepage/Slider.vue";
export default {
  components: {
    Slider,
  },
};
</script>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  &__title {
    grid-column: 2/6;
    margin-top: 60px;
    font-size: 4.5rem;
    font-weight: 700;
    color: $fontColor2;
  }
  &__slider {
    grid-column: 6 / 12;
  }
}
</style>
