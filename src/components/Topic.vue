<template>
  <div class="topic">
    <div class="container">
      <header-layout></header-layout>
      <div class="topic-content">
        <div class="title-topic">
          this is topic title
        </div>
        <div class="main-topic">
          <div v-html="description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLayout from './HeaderLayout.vue';
//import firebase from 'firebase';

export default {
  components: {
    HeaderLayout
  },
  data: () => ({
    title: '',
    description: ''
  }),
  async created() {
    //var user = firebase.auth().currentUser;

    //var topic = await firebase.firestore().
  }
}
</script>

<style>

</style>