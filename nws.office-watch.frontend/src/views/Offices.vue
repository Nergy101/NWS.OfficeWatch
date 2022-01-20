<template>
  <div class="offices" v-if="offices">
    <div class="offices__office-list">
      <OfficeCard v-for="(office, index) in offices" :key="index" :data="office"></OfficeCard>
    </div>
  </div>
</template>

<script>
import OfficeCard from "../components/OfficeCard.vue";
import apolloClient from "../main.js";
import gql from "graphql-tag";
export default {
  async created() {
    this.loading = true;
    let res = await apolloClient.query({
      query: gql`
        query offices {
          offices {
            _id
            careers
            name
            propertyType
          }
        }
      `,
    });
    this.offices = res.data.offices;
    this.loading = false;
  },
  components: {
    OfficeCard,
  },
  data() {
    return {
      offices: [],
    };
  },
};
</script>

<style lang="scss">
.offices {
  &__office-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 500px));
  }
}
</style>
