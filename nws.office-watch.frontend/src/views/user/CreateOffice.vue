<template>
  <div class="co">
    <h2 class="co__title">Add your office</h2>
    <form class="co__form form" ref="form">
      <!-- IMAGES -->
      <div class="form-group mb-5 col-sm-12 col-md-5">
        <label for="formFileMultiple" class="form-label"
          >Upload Pictures of the building</label
        >
        <input
          class="form-control col-5"
          type="file"
          id="formFileMultiple"
          multiple
        />
      </div>
      <!-- ADDRESS  -->
      <div class="form-group mb-5 col-sm-12 col-md-5 needs-validation">
        <label for="address" class="form-label">Find your Address Here</label>
        <div class="input-group">
          <div class="input-group-prepend" style="border-right: none">
            <span class="input-group-text bg-white">
              <BIconGeoAltFill class="bootstrap-icon" />&nbsp;
            </span>
          </div>
          <GMapAutocomplete
            placeholder="address"
            class="co__form__address"
            @place_changed="setPlace"
            ref="myMapRef"
          >
          </GMapAutocomplete>
        </div>
      </div>
      <div class="row">
        <!-- STREET -->
        <div class="form-group mb-5 col-12 col-sm-6 col-md-3">
          <label for="jobTitle" class="form-label">Street*</label>
          <div class="input-group">
            <div class="input-group-prepend" style="border-right: none">
              <span class="input-group-text bg-white">
                <BIconGeoAltFill class="bootstrap-icon" />&nbsp;
              </span>
            </div>
            <input
              v-model="newOffice.address.street"
              name="jobTitle"
              type="address"
              id="jobTitle"
              placeholder="Street"
              class="form-control border-left-0"
              required
              style="border-left: none"
            />
          </div>
        </div>
        <!-- Province -->
        <div class="form-group mb-5 col-12 col-sm-6 col-md-3">
          <label for="jobTitle" class="form-label">Province*</label>
          <div class="input-group">
            <div class="input-group-prepend" style="border-right: none">
              <span class="input-group-text bg-white">
                <BIconGeoAltFill class="bootstrap-icon" />&nbsp;
              </span>
            </div>
            <input
              v-model="newOffice.address.province"
              name="jobTitle"
              type="address"
              id="jobTitle"
              placeholder="province"
              class="form-control border-left-0"
              required
              style="border-left: none"
            />
          </div>
        </div>
        <!-- COUNTRY -->
        <div class="form-group mb-5 col-12 col-sm-6 col-md-3">
          <label for="jobTitle" class="form-label">Country*</label>
          <div class="input-group">
            <div class="input-group-prepend" style="border-right: none">
              <span class="input-group-text bg-white">
                <BIconGeoAltFill class="bootstrap-icon" />&nbsp;
              </span>
            </div>
            <input
              v-model="newOffice.address.country"
              name="jobTitle"
              type="address"
              id="jobTitle"
              placeholder="country"
              class="form-control border-left-0"
              required
              style="border-left: none"
            />
          </div>
        </div>
        <!-- POSTAL CODE -->
        <div class="form-group mb-5 col-12 col-sm-6 col-md-3">
          <label for="jobTitle" class="form-label">Postal Code*</label>
          <div class="input-group">
            <div class="input-group-prepend" style="border-right: none">
              <span class="input-group-text bg-white">
                <BIconGeoAltFill class="bootstrap-icon" />&nbsp;
              </span>
            </div>
            <input
              v-model="newOffice.address.postalcode"
              name="jobTitle"
              type="address"
              id="jobTitle"
              placeholder="postal code"
              class="form-control border-left-0"
              required
              style="border-left: none"
            />
          </div>
        </div>
        <div class="row">
          <!-- JOB TITLE -->
          <div class="form-group mb-5 col-12 col-sm-6 col-md-3">
            <label for="jobTitle" class="form-label"
              >Careers the building supports</label
            >
            <div class="input-group">
              <div class="input-group-prepend" style="border-right: none">
                <span class="input-group-text bg-white">
                  <BIconMortarboardFill class="bootstrap-icon" />&nbsp;
                </span>
              </div>
              <input
                name="jobTitle"
                type="address"
                id="jobTitle"
                placeholder="Careers"
                class="form-control border-left-0"
                required
                style="border-left: none"
              />
            </div>
          </div>
        </div>

        <!-- PROPERTY TYPE -->
        <div class="form-group mb-5 col-12 col-sm-6 col-md-3">
          <label for="propertyType" class="form-label">Property Type</label>
          <div class="input-group">
            <div class="input-group-prepend" style="border-right: none">
              <span class="input-group-text bg-white">
                <BIconHouseFill class="bootstrap-icon" />&nbsp;
              </span>
            </div>
            <select
              class="form-select multiple mb-3"
              style="border-left: none"
              aria-label="multiple select example"
            >
              <option selected>Property type</option>
              <option value="1">High rise</option>
              <option value="2">House</option>
              <option value="3">Office</option>
            </select>
          </div>
        </div>
      </div>
      <button
        @click="createOfficeSpace()"
        type="submit"
        class="btn btn-primary col-md-2 col-sm-4 form-button"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import {
  BIconGeoAltFill,
  BIconHouseFill,
  BIconMortarboardFill,
} from "bootstrap-icons-vue";
export default {
  components: {
    BIconGeoAltFill,
    BIconHouseFill,
    BIconMortarboardFill,
  },
  data() {
    return {
      newOffice: {
        images: [],
        address: {
          street: "",
          province: "",
          country: "",
          postalcode: "",
          longname: "",
        },
        careers: "",
        propertyType: "",
      },
    };
  },
  methods: {
    setPlace(place) {
      let longName = "";
      let shortName = "";
      let country = "";
      let address1 = "";
      let postcode = "";
      console.log(place.address_components);
      for (const component of place.address_components) {
        const componentType = component.types[0];

        switch (componentType) {
          case "street_number": {
            address1 = `${component.long_name} ${address1}`;
            break;
          }

          case "route": {
            address1 += component.short_name;
            break;
          }

          case "postal_code": {
            postcode = `${component.long_name}${postcode}`;
            break;
          }

          case "postal_code_suffix": {
            postcode = `${postcode}-${component.long_name}`;
            break;
          }
          case "locality":
            longName = component.long_name;
            break;
          case "administrative_area_level_1": {
            shortName = component.short_name;
            break;
          }
          case "country":
            country = component.long_name;
            break;
        }
      }
      this.newOffice.address = {
        street: address1,
        province: shortName,
        country: country,
        postalcode: postcode,
        longname: longName,
      };
    },
    createOfficeSpace() {
      console.log(this.$refs.form);
    },
  },
};
</script>

<style lang="scss">
.co {
  margin: 0 auto;
  padding: 3rem;
  width: 85%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &__title {
    text-align: center;
    margin-bottom: 2rem;
  }
  &__form {
    &__address {
      border: 0.8px solid #dfdfdf;
      border-left: none;
      width: 80%;
    }
  }
}
</style>
