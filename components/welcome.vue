<template>
  <div class="container-fluid">
    <div class="text-center" style="margin-top: 70px">
      <img
        src="assets/images/logo.png"
        class="img-fluid"
        style="max-width: 100px"
      />
      <h1 class="py-2">Welcome to Utupress</h1>
    </div>

    <div class="container">
      <div v-if="websites.length" class="text-center">
        <p class="text-center">
          You have designed the following websites so far
        </p>
        <div v-for="(website, index) in websites" :key="index" class="row">
          <div class="col-sm-8">
            <h3>{{ website.name }}</h3>
            <small>{{ website.title }}</small>
          </div>
          <div class="col-sm-4">
            <div class="d-flex">
              <a class="btn btn-outline-primary" href="#">Edit</a>
              <a class="btn btn-outline-danger" href="#">Delete</a>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <p>You have not designed any website on this browser.</p>
        <a class="btn btn-primary mt-5">Start Building</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "welcome",
  props: {
    websites: {
      type: [String, Object],
      default: false,
    },
  },
  data() {
    return {
      is_new: true,
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
