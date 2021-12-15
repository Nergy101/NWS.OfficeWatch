<template>
  <div class="offices-spaces">
    <div class="office-spaces__cards">
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
      officeSpaces: [{ name: "test" }],
    };
  },
  async mounted() {
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
            rating
            availableFrom
            availableUntil
          }
        }
      `,
    });
    this.officeSpaces = res.data.officeSpaces;
  },
};
</script>

<style lang="scss">
.office-spaces {
  &__cards {
    margin: 15rem;
    display: grid;
    grid-template-columns: repeat(6, minmax(15rem, 30rem));

    &__card {
      width: 20rem;
    }
  }
}
</style>
