<template>
  <div class="search-dialog container-fluid">
    <div class="form">
      <div class="search-dialog__title">
        Please add the following information to find your perfect working space
      </div>
      <form>
        <div class="row bootstrap-row">
          <!-- ADDRESS  -->
          <div
            class="form-group mb-3 col-md-6 col-sm-12 search-dialog__address"
          >
            <label for="address" class="form-label">Address</label>
            <div class="input-group">
              <div class="input-group-prepend" style="border-right: none">
                <span class="input-group-text bg-white">
                  <BIconGeoAltFill class="bootstrap-icon" />&nbsp;
                </span>
              </div>
              <input
                name="address"
                type="address"
                id="address"
                placeholder="address"
                class="form-control border-left-0"
                required
                style="border-left: none"
              />
            </div>
          </div>
          <!-- JOB TITLE -->
          <div class="form-group mb-3 col-6 col-lg-3 search-dialog__job-title">
            <label for="jobTitle" class="form-label">Job Title</label>
            <div class="input-group">
              <div class="input-group-prepend" style="border-right: none">
                <span class="input-group-text bg-white">
                  <BIconGeoAltFill class="bootstrap-icon" />&nbsp;
                </span>
              </div>
              <input
                name="jobTitle"
                type="address"
                id="jobTitle"
                placeholder="job title"
                class="form-control border-left-0"
                required
                style="border-left: none"
              />
            </div>
          </div>
        </div>
        <div class="row bootstrap-row">
          <!-- PROPERTY TYPE -->
          <div
            class="form-group mb-3 col-6 col-lg-3 search-dialog__property-type"
          >
            <label for="propertyType" class="form-label">Property Type</label>
            <div class="input-group">
              <div class="input-group-prepend" style="border-right: none">
                <span class="input-group-text bg-white">
                  <BIconHouseFill class="bootstrap-icon" />&nbsp;
                </span>
              </div>
              <input
                name="propertyType"
                type="text"
                id="propertyType"
                placeholder="Property Type"
                class="form-control border-left-0"
                required
                style="border-left: none"
              />
            </div>
          </div>
          <!-- SQFT -->
          <div class="form-group col-6 col-lg-3 mb-3 search-dialog__SQFT">
            <label for="SQFT" class="form-label">SQFT</label>
            <div class="input-group">
              <div class="input-group-prepend" style="border-right: none">
                <span class="input-group-text bg-white">
                  <BIconDashSquareFill class="bootstrap-icon" />&nbsp;
                </span>
              </div>
              <input
                name="SQFT"
                type="text"
                id="SQFT"
                placeholder=""
                class="form-control border-left-0"
                required
                style="border-left: none"
              />
            </div>
          </div>
          <!-- PRICE RANGE -->
          <div
            class="form-group mb-3 col-6 col-lg-3 search-dialog__price-range"
          >
            <label for="priceRange" class="form-label">Price range From</label>
            <div class="input-group">
              <div class="input-group-prepend" style="border-right: none">
                <span class="input-group-text bg-white">
                  <BIconCurrencyDollar class="bootstrap-icon" />&nbsp;
                </span>
              </div>
              <input
                name="priceRange"
                type="text"
                id="priceRange"
                placeholder=""
                class="form-control border-left-0"
                required
                style="border-left: none"
              />
            </div>
          </div>
          <!-- PRICE RANGE -->
          <div
            class="form-group mb-3 col-6 col-lg-3 search-dialog__price-range"
          >
            <label for="priceRange" class="form-label">Price range to</label>
            <div class="input-group">
              <div class="input-group-prepend" style="border-right: none">
                <span class="input-group-text bg-white">
                  <BIconCurrencyDollar class="bootstrap-icon" />&nbsp;
                </span>
              </div>
              <input
                name="priceRange"
                type="text"
                id="priceRange"
                placeholder=""
                class="form-control border-left-0"
                required
                style="border-left: none"
              />
            </div>
          </div>
          <!-- AMMENITIES -->
          <!-- <div class="form-group mb-3 col-6 col-lg-2 search-dialog__address">
            <label for="ammenitiesa" class="form-label">Ammenities</label>
            <div class="input-group">
              <div class="input-group-prepend" style="border-right: none">
                <span class="input-group-text bg-white">
                  <BIconGeoAltFill class="bootstrap-icon" />&nbsp;
                </span>
              </div>
              <input
                name="ammenities"
                type="text"
                id="ammenities"
                placeholder=""
                class="form-control border-left-0"
                required
                style="border-left: none"
              />
            </div>
          </div> -->
          <!-- SEARCH BUTTONS -->
        </div>
        <button
          @click="searchOfficeSpaces()"
          type="submit"
          class="btn btn-primary col-2 mt-3 form-button"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  BIconGeoAltFill,
  BIconHouseFill,
  BIconCurrencyDollar,
  BIconDashSquareFill,
} from "bootstrap-icons-vue";
export default {
  components: {
    BIconGeoAltFill,
    BIconHouseFill,
    BIconCurrencyDollar,
    BIconDashSquareFill,
  },
  methods: {
    searchOfficeSpaces() {
      this.$router.push({
        name: "OfficeSpaces",
        params: {
          search: "",
        },
      });
    },
  },
};
</script>

<style lang="scss">
.search-dialog {
  background: $backgroundColor1;
  border-radius: 1rem;
  border: 1px solid $brandColor1;

  padding: 2.5rem 2.5rem 1rem 2.5rem;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.1);
  label {
    font-weight: 500;
    color: $fontColorPrimaryLighten3;
  }
  &__title {
    font-size: 1.7rem;
    font-weight: 500;
    color: $fontColorPrimaryLighten2;
    margin-bottom: 1rem;
  }
  &__address {
  }
}
.bootstrap-row {
  align-items: center;
}
.bootstrap-icon {
  fill: $fontColorPrimaryLighten1;
}
.form-button {
  color: $fontColorPrimaryLighten5 !important;
}
</style>
