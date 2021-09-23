<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="assets/images/logo.png"
          class="img-fluid"
          style="max-width: 25px"
        />
        Utupress</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle active"
              v-bind:class="{ show: dropdown.home }"
              href="#"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="dropdown.home = !dropdown.home"
            >
              Home
            </a>
            <ul
              class="dropdown-menu"
              v-bind:class="{ show: dropdown.home }"
              aria-labelledby="navbarScrollingDropdown"
            >
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="dropdown.home = !dropdown.home"
                  >Home</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="dropdown.home = !dropdown.home"
                  >Contact Us</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="dropdown.home = !dropdown.home"
                >
                  <i class="fas fa-plus-circle"></i> Add Page</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="fas fa-plus-circle"></i> Add Page</a
            >
          </li>
        </ul>
        <div>
          <a href="#"><i class="fas fa-tachometer-alt"></i> Open Admin</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "topmenu",
  props: {
    title: {
      type: String,
      default: "Heading H6",
    },
    url: {
      type: [String, Object],
      default: "",
    },
  },
  data() {
    return {
      sample: "nested!",
      dropdown: { home: false },
    };
  },
};
</script>

<style scoped>
.example {
  color: red;
}
</style>
