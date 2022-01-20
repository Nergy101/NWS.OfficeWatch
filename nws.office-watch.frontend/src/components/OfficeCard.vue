<template>
  <div class="office-card" @click="routeToOfficeSpace()">
    <img
      src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="office"
      class="office-card__img"
    />
    <div class="office-card__name">{{ data.name }}</div>
    <div class="office-card__price">${{ data.propertyType }}</div>
    <div class="office-card__careers">{{ data.careers }}</div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    routeToOfficeSpace() {
      this.$router.push({
        name: "OfficeSpace",
      });
    },
  },
};
</script>

<style lang="scss">
.office-card {
  display: flex;
  max-width: 25em;
  background: rgb(162, 162, 175);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  &__img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: inherit;
    border-bottom-left-radius: 0em;
    border-bottom-right-radius: 0em;
  }
}
</style>
