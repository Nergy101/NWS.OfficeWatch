<template>
  <div class="login">
    <!-- Click on Modal Button -->
    <button
      type="button"
      class="btn btn-primary mx-auto d-block mt-5"
      data-bs-toggle="modal"
      data-bs-target="#modalForm"
    >
      Bootstrap Modal popup
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modalForm"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Bootstrap 5 Modal Form
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label class="form-label">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="rememberMe"
                />
                <label class="form-check-label" for="rememberMe"
                  >Remember me</label
                >
              </div>
              <div class="modal-footer d-block">
                <p class="float-start">
                  Not yet account <a href="#">Sign Up</a>
                </p>
                <button type="submit" class="btn btn-warning float-end">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
