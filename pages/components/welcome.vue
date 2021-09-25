<template>
  <div class="container-fluid">
    <div class="text-center pt-3">
      <img
        src="assets/images/logo.png"
        class="img-fluid"
        style="max-width: 100px"
      />
      <h1 class="py-2">Welcome to Utupress</h1>
    </div>

    <div v-if="is_new" class="container">
      <div v-if="websites.length" class="text-center">
        <p class="text-center">
          You have designed the following websites so far
        </p>
        <div
          v-for="(website, index) in websites"
          :key="index"
          class="bg-light border-bottom border rounded row p-2 mb-3"
        >
          <div class="col-sm-7">
            <h4>{{ website.name }}</h4>
            <small>{{ website.title }}</small>
          </div>
          <div class="col-sm-5 text-center">
            <a class="btn btn-outline-primary mr-2" href="#"
              ><i class="fas fa-pencil-alt"></i> Edit</a
            >
            &nbsp;&nbsp;
            <a class="btn btn-outline-danger" href="#"
              ><i class="far fa-trash-alt"></i> Delete</a
            >
          </div>
        </div>
      </div>

      <div v-else>
        <p>You have not designed any website on this browser.</p>
      </div>

      <div class="text-center">
        <a class="btn btn-primary mt-2" @click="is_new = !is_new"
          >Start Building</a
        >
      </div>
    </div>

    <div v-else class="container">
      <form>
        <div class="row">
          <div class="col-sm-6 form-group">
            <label for="sitename">Site Name</label>
            <input
              type="text"
              class="form-control"
              id="sitename"
              placeholder="Site Name"
            />
          </div>
          <div class="col-sm-6 form-group">
            <label for="title">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
        </div>
      </form>

      <div class="row">
        <div class="col-6 col-sm-3">
          <div class="text-center bg-light border rounded">
            <a href="#" @click="createBlankDesign">
              <img src="assets/images/design.png" class="img-fluid" />
              <br />
              <b>New Blank</b>
            </a>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a class="btn btn-danger mt-2" @click="is_new = !is_new"
          ><i class="far fa-times-circle"></i> Cancel
        </a>
        &nbsp; &nbsp;
        <a class="btn btn-primary mt-2"><i class="far fa-save"></i> Save </a>
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
    that: {
      type: Object,
    },
  },
  data() {
    return {
      is_new: true,

      dropdown: { home: false },
    };
  },
  methods: {
    startBuilding() {
      this.is_new = false;
    },
    createBlankDesign() {
      console.log(this.$props);
      this.that.createBlankDesign();
    },
  },
};
</script>

<style scoped>
.example {
  color: red;
}
</style>
