import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import store from "@/store/index.js";

Vue.config.productionTip = false;

export const bus = new Vue();

const firebaseConfig = {
  apiKey: "AIzaSyD1bD5_b1AOlXSF3LrnWvSx1MS9mo8iAU4",
  authDomain: "project-blog-83893.firebaseapp.com",
  databaseURL: "https://project-blog-83893.firebaseio.com",
  projectId: "project-blog-83893",
  storageBucket: "project-blog-83893.appspot.com",
  messagingSenderId: "984412207170",
  appId: "1:984412207170:web:49343c12c68c387f2255db",
  measurementId: "G-WYGDT3XXY9"
};

firebase.initializeApp(firebaseConfig);

var currentUser = undefined;

router.beforeEach((to, from, next) => {
  currentUser = firebase.auth().currentUser;

  var requireAuth = to.matched.some(e => e.meta.requireAuth);

  if (requireAuth && !currentUser) {
    next("/sign-in");
  } else if (!requireAuth) next();
  next();
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    currentUser = true;
  } else {
    currentUser = false;
  }
  new Vue({
    router,
    render: h => h(App),
    store
  }).$mount("#app");
});
