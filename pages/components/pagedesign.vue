<template>
  <div>
    <template v-for="(section, index) in sections">
      <section :id="section.name" :key="index">
        <template v-for="(component, comp_index) in section.components">
          <div :key="comp_index">
            <a
              v-if="comp_index != 0"
              href="#"
              @click="loadMove(index, comp_index, 'up')"
              >Up</a
            >
            <a
              v-if="section.components.length != comp_index + 1"
              href="#"
              @click="loadMove(index, comp_index, 'down')"
              >Down</a
            >
          </div>
          <component :key="comp_index" :is="component" />
        </template>
        <a class="btn btn-primary" @click="loadComponents(index)"
          >Load Components</a
        >
      </section>
    </template>

    <a class="btn btn-primary" @click="loadComponents">Load Components</a>
    <a class="btn btn-primary" @click="reloadApp">Reload App</a>
    <router-link class="btn btn-primary" :to="'/contactus'"
      >contact us</router-link
    >
  </div>
</template>
<script>
export default {
  name: "topmenu",
  props: {
    sections: {
      type: [String, Object],
      default: "",
    },
  },
  data() {
    return {
      dropdown: { home: false },
    };
  },

  methods: {
    loadMove(index, comp_index, direction) {
      this.sections[index].components.splice(
        direction == "up" ? comp_index - 1 : comp_index + 1,
        0,
        this.sections[index].components.splice(comp_index, 1)[0]
      );
    },
    loadComponents(index) {
      this.sections[index].components.push(fetchBlock("header2"));
      this.sections[index].components.push(fetchBlock("harticle"));
    },
  },
};
</script>

<style scoped>
.example {
  color: red;
}
</style>
