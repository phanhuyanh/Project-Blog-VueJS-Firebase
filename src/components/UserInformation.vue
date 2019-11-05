<template>
  <div id="user-information">
    <div class="container">
      <header-layout></header-layout>
      <div class="user-info">
        <div class="main-nav-info">
          <ul class="-flex">
            <router-link
              v-for="item in list_info"
              :to="item.link"
              :key="item.key"
              exact
            >{{ item.title }}</router-link>
          </ul>
        </div>
        <div class="main-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLayout from "./HeaderLayout.vue";
//import firebase from 'firebase';
//import ge from '../common/generate_key.js';

export default {
  components: {
    HeaderLayout
  },
  data: () => ({
    idx: 0,
    list_info: [
      { title: "Profile", key: 0, link: "/user-information" },
      { title: "My Blog", key: 1, link: "/user-information/my-blog" },
      {title: "Add Blog", key: 2, link: "/user-information/add-blog"}
    ]
  }),
  created() {
    //firebase.database().ref("storeKey").set({key: "[]"})
    //await ge()
    //var db = firebase.database();

    //db.ref('storeKey').set({key: '1'})

    // this.$http.get('https://project-blog-83893.firebaseio.com/').then(data => console.log(data))
    //     .catch(err => console.log(err))

    // db.ref("storeKey").once('value').then(function(snapshot) {
    //   console.log(snapshot.val())
    // })
  }
};
</script>

<style scoped>
#user-information {
  background: #f5f6f7;
}

.user-info {
  padding-top: 110px;
}

.main-nav-info {
  padding: 15px 0;
}

.main-nav-info ul {
  list-style-type: none;
  border-bottom: 1px solid #cccccc61;
}

.main-nav-info ul a {
  padding: 15px 20px;
  position: relative;
}

.main-nav-info ul a.router-link-active {
  color: #548eff;
}

.main-nav-info ul a.router-link-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 2px;
  background: #548eff;
}


.main-content {
  padding: 15px 0 30px 0;
}
</style>