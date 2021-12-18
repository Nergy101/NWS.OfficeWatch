<template>
  <div class="container">
    <div class="left">
      <h2>Office Space Info</h2>
      <p>Office Space Name</p>
      <p>For amount of people</p>
      <p>Price $/€</p>
    </div>
    <div class="right">
      <div class="grid-widget-container">
        <div class="grid-widget">
          <div class="chart-wrapper">
            <apexchart
              type="polarArea"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apolloClient from "../main.js";
import gql from "graphql-tag";
export default {
  components: {},
  data() {
    return {
      series: [1, 2, 3, 4, 5],
      chartOptions: {
        chart: {
          type: "polarArea",
          height: 350,
        },
        labels: [
          "Catering",
          "Location",
          "Office Space",
          "Friendlyness",
          "Sustainability",
        ],
        yaxis: {
          show: false,
          min: 0,
          max: 5,
        },
        stroke: {
          colors: ["#fff"],
        },
        fill: {
          opacity: 0.85,
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0.5,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },
      },
    };
  },
  async mounted() {
    let officeSpaceRating = await apolloClient.query({
      query: gql`
        query {
          officeSpace(officeSpaceId: "619944ec990d7f727a7f4cdd") {
            rating {
              cateringRating
              locationRating
              officeSpaceRating
              friendlynessRating
              sustainabilityRating
            }
          }
        }
      `,
    });

    let rating = officeSpaceRating.data.officeSpace.rating;
    this.series = [
      rating.cateringRating,
      rating.locationRating,
      rating.officeSpaceRating,
      rating.friendlynessRating,
      rating.sustainabilityRating,
    ];
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  flex: 1;

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .grid-widget-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
    }
    .grid-widget {
      flex: 1;
      box-sizing: border-box;
      padding: 0;
      height: 100%;
      min-height: 0;
      width: 100%;
      overflow: auto;
    }
    .chart-wrapper {
      width: 100%;
      height: 100%;
      display: block;
      overflow: hidden;
    }
  }
}
</style>
