<template>
  <div class="offices-spaces">
    <div v-if="loading">loading...</div>
    <div v-if="officeSpaces" class="office-spaces__cards">
      <OfficeSpaceCard
        v-for="(office, index) in officeSpaces"
        class="office-spaces__cards__card"
        :key="index"
        :data="office"
      ></OfficeSpaceCard>
    </div>
  </div>
</template>

<script>
import OfficeSpaceCard from "../components/OfficeSpaceCard.vue";
import apolloClient from "../main.js";
import gql from "graphql-tag";
export default {
  components: {
    OfficeSpaceCard,
  },
  data() {
    return {
      officeSpaces: [],
    };
  },
  async created() {
    this.loading = true;
    let res = await apolloClient.query({
      query: gql`
        query {
          officeSpaces {
            name
            office {
              address {
                country {
                  name
                }
              }
            }
            price
            rating {
              locationRating
            }
            availableFromUtc
            availableUntilUtc
          }
        }
      `,
    });
    this.officeSpaces = res.data.officeSpaces;
    this.loading = false;
  },
};
</script>

<style lang="scss">
.office-spaces {
  &__cards {
    margin: 5rem;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 3rem;
    &__card {
    }
  }
}
</style>
