<template>
  <div class="log-in">
    <div class="btn btn-dark">
      <router-link to="/sign-in" v-if="!hasLogIn">Sign In</router-link>
      <button class="btn btn-dark" v-else @click="signOut()">Sign Out</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data: () => ({
    hasLogIn: false
  }),
  created() {
    this.hasLogIn = !!firebase.auth().currentUser;
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("sign-in"))
        .catch(function() {
          // An error happened.
        });
    }
  }
};  
</script>

<style scoped>
.log-in {
  cursor: pointer;
  font-size: 1.1rem;
}

.log-in a {
  color: #fff;
}

.log-in:hover a {
  color: #181818;
}
</style>