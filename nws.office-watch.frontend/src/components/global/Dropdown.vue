<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle dropdown__button"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ settings.title }}
    </button>
    <ul
      class="dropdown-menu dropdown__menu"
      aria-labelledby="dropdownMenuButton1"
    >
      <li v-for="(item, index) in settings.dropdownItems" :key="index">
        <a class="dropdown-item" href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      default: () => {
        return {
          title: "title",
          dropdownItems: ["One", "Two", "Three"],
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 0%;
    padding-top: 4px;
    border-bottom: $brandColor1 solid 1px;
    transition: 0.2s;
  }
  &:hover {
    transition: all 0.2s;
    .dropdown__button {
      color: $brandColor1;
    }
    &:after {
      padding-top: 4px;
      width: 30%;
    }
  }
  &__button {
    font-size: 1.5rem;
    color: $fontColorPrimary;
    font-weight: 400;
  }
  &__menu {
    font-size: 1.5rem;
    width: 100%;
    :active {
      border: none;
    }
  }
}
</style>
