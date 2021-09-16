<template>
  <div id="app">
    <button type="button" @click="add">Add Component</button>
    <component
      v-for="(component, index) in components"
      :key="index"
      :is="component"
    />
  </div>
</template>


<script>
    const Comp = {
    template: "<div>Hello world</div>",
    };
    const Comp2 = {
    template: '<div><a href="#" @click="messager">Hello world</a></div>',
    methods: {
        messager() {
        alert("Wonderful");
        },
    },
    };

    new Vue({
    el: "#app",

    data: {
        is_switch: false,
        components: [Comp, Comp2],
    },

    methods: {
        add() {
        if (this.is_switch) {
            this.components.push(Comp);
        } else {
            this.components.push(Comp2);
        }

        this.is_switch = !this.is_switch;
        },
    },
    });
</script>

<style>
    body {
    background: #20262e;
    padding: 20px;
    font-family: Helvetica;
    }

    #app {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    transition: all 0.2s;
    }

    li {
    margin: 8px 0;
    }

    h2 {
    font-weight: bold;
    margin-bottom: 15px;
    }

    del {
    color: rgba(0, 0, 0, 0.3);
    }
</style>
