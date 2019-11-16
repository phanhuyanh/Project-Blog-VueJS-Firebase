<template>
  <div class="topic">
    <div class="container">
      <header-layout></header-layout>
      <div class="topic-content">
        <div class="title-topic">
          {{ topic.title }}
        </div>
        <div class="main-topic">
          <div v-html="compiledMarkdown" class="preview overflow-y-auto"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLayout from './HeaderLayout.vue';
import firebase from 'firebase';
import marked from 'marked';

export default {
  components: {
    HeaderLayout
  },
  data: () => ({
    title: '',
    description: '',
    topic: {}
  }),
  async created() {
    var user = firebase.auth().currentUser;
    var id_topic = this.$route.params.id;
    //console.log(id_topic, user.uid)
    this.topic = await firebase.firestore().collection("blogs").doc(user.uid).collection("blog").doc(id_topic).get().then(data => data.data()).catch(err => err);

    //console.log("topic ", topic)
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.topic.description || '', { sanitize: true });
    }
  },
}
</script>

<style scoped>
.topic-content {
  padding: 150px 0;
}

.topic-content .title-topic {
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  font-size: 1.4rem;
}

.main-topic {
  margin-top: 30px;
}

.main-topic a {
  color: #2b2bff;
}

.preview {
  line-height: 45px;
  background: #fff;
}

.preview a {
  color: #2b2bff;
;
}
</style>