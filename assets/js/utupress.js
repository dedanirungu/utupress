   /**xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  Database xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
   //
   // Define your database
   //
   var db = new Dexie("utupress");
   db.version(1).stores({
       settings: 'name,value'
   });

   //
   // Put some data into it
   //
   db.settings.put({
       name: "limit",
       value: 20
   }).then(function () {
       //
       // Then when data is stored, read from it
       //
       return db.settings.get('limit');
   }).then(function (friend) {
       //
       // Display the result
       //
   }).catch(function (error) {
       //
       // Finally don't forget to catch any error
       // that could have happened anywhere in the
       // code blocks above.
       //
       alert("Ooops: " + error);
   });



   /**xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  Store xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
   var storelist = {
       system: {
           namespaced: true,
           state: {
               sidebar_show: false,
               layout: false,
           },
           mutations: {
               sidebar_show(state, payload) {
                   state.sidebar_show = payload;
               },

               layout(state, payload) {
                   state.layout = payload;
               },
           },
           actions: {

           },
           getters: {

           }
       },
   }
   /*
    // State
    this.$store.state.auth.userdata
    // Mutation
    this.$store.commit('auth/login', { username: 'logged_user' })
    // Action
    this.$store.dispatch('auth/authenticate', { username: this.username, password: this.password })
    // Getter
    this.$store.getters['auth/loggedIn']
    */


   /**xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  Component loader xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */



   const {
       loadModule
   } = window['vue3-sfc-loader'];


   const options = {
       moduleCache: {
           vue: Vue
       },
       async getFile(url) {

           const res = await fetch(url);
           if (!res.ok)
               throw Object.assign(new Error(res.statusText + ' ' + url), {
                   res
               });
           return {
               getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
           }
       },
       addStyle(textContent) {

           const style = Object.assign(document.createElement('style'), {
               textContent
           });
           const ref = document.head.getElementsByTagName('style')[0] || null;
           document.head.insertBefore(style, ref);
       },


       log(type, ...args) {

           console[type](...args);
       },

       compiledCache: {
           set(key, str) {

               // naive storage space management
               for (;;) {

                   try {

                       // doc: https://developer.mozilla.org/en-US/docs/Web/API/Storage
                       window.localStorage.setItem(key, str);
                       break;
                   } catch (ex) {

                       // handle: Uncaught DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'XXX' exceeded the quota

                       window.localStorage.removeItem(window.localStorage.key(0));
                   }
               }
           },
           get(key) {

               return window.localStorage.getItem(key);
           },
       },

       handleModule(type, source, path, options) {

           if (type === '.json')
               return JSON.parse(source);
       }

   }

   const fetchBlock = (tag_name) => {
       return Vue.defineAsyncComponent(() => loadModule(window.block_url + tag_name + '/index.vue', options));
   }

   const fetchPage = (tag_name) => {
       return Vue.defineAsyncComponent(() => loadModule('./pages/' + tag_name, options));
   }

   const fetchComponent = (tag_name) => {
       return Vue.defineAsyncComponent(() => loadModule('./components/' + tag_name, options));
   }