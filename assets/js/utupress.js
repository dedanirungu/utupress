   /**xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  Database xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
   //
   // Define your database
   //
   var db = new Dexie("utupress");
   db.version(1).stores({
       settings: 'name,value',
       cached: 'name,value'
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
       auth: {
           namespaced: true,
           state: {
               affiliate: {},
               userprofile: {},
               token: null,
               user: {}
           },
           mutations: {

               affiliate(state, payload) {
                   state.affiliate = payload;
               },

               login(state, payload) {
                   state.token = payload;
               },
               user(state, payload) {
                   state.user = payload;
               },
               logout(state) {
                   state.token = null;
                   state.affiliate = {};
                   state.userprofile = {};
                   state.user = {};
               }
           },
           actions: {
               authenticate({
                   commit
               }, {
                   username,
                   password
               }) {

                   commit('login', response.data.data.tokenAuth);

               },
               getUser({
                   commit
               }, {
                   that
               }) {

                   commit('user', me);

               },
               affiliate({
                   commit
               }, {
                   user_id,
               }) {

                   commit('affiliate', node_data);

               },
           },
           getters: {
               loggedIn(state) {
                   return state.token !== null;
               }
           }
       }
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
       return Vue.defineAsyncComponent(() => loadModule('./pages/components/' + tag_name, options));
   }