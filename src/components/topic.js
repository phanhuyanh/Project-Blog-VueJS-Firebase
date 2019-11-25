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
    var id_topic = this.$route.params.id;
    //console.log(id_topic, user.uid)
    this.topic = await firebase.firestore().collection("newBlogs").doc(id_topic).get().then(data => data.data()).catch(err => err);

    //console.log("topic ", topic)
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.topic.description || '', { sanitize: true });
    }
  },
}