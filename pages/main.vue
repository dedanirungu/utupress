<template>
  <div>
    <topmenu :show_welcome="show_welcome" />
    <welcome v-if="show_welcome" :websites="websites" />
    <pagedesign v-else :sections="sections" />
  </div>
</template>

<script>
export default {
  components: {
    welcome: fetchComponent("welcome.vue"),
    pagedesign: fetchComponent("pagedesign.vue"),
    topmenu: fetchComponent("topmenu.vue"),
    header1: fetchBlock("header1"),
    harticle: fetchBlock("harticle"),
  },
  created() {
    this.sections = [
      {
        name: "header",
        components: [fetchBlock("header1"), fetchBlock("harticle")],
      },
      {
        name: "body",
        components: [fetchBlock("header1"), fetchBlock("harticle")],
      },
      {
        name: "footer",
        components: [fetchBlock("header1"), fetchBlock("harticle")],
      },
    ];

    this.pages = [
      { name: "aboutus", title: "About Us", description: "About Us" },
      { name: "contactus", title: "Contact Us", description: "Contact Us" },
    ];

    this.websites = [
      { name: "www.johndoe.com", title: "Amazing Website" },
      { name: "www.peterdoe.com", title: "Amazing Website 2" },
    ];
  },
  data() {
    return {
      msg: "world!",
      sections: [],
      pages: [],
      websites: [],
      show_welcome: true,
    };
  },

  methods: {
    reloadApp() {
      this.$router.addRoute({
        path: "/contactus",
        component: fetchPage("general.vue"),
      });
      this.$forceUpdate();
      alert("sdfsdf");
    },
  },
};
</script>

<style scoped>
.example {
  color: red;
}
</style>
