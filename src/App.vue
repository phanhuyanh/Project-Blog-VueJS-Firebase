<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from "@/api/store.js";

export default {
  name: "app",
  async created() {
    var user = store.getMyUser();

    var me = await store.getUser(user.uid);

    if (me == "err") alert("load du lieu bi loi xin hay F5 lai");
    else this.$store.commit("updateMe", me);
  }
};
</script>

<style >

</style>
