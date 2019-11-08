import marked from 'marked';
import generateKey from '../common/generate_key.js';
import firebase from 'firebase';

export default {
  data: () => ({
    input: "",
    title: ''
  }),
  created() {
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input || '', { sanitize: true });
    }
  },
  methods: {
    async postBlog() {
        var user = firebase.auth().currentUser;
         var key = await generateKey();

         var db = firebase.firestore();

        db.collection("blogs").doc(user.uid).collection("blog").doc(key).set({
            id: key,
            description: this.input,
            timestamp: Date.now(),
            title: this.title
        }).then(() => {
          alert('thanh cong');
          this.input = '';
          this.title = '';
        })
        .catch(() => alert('that bai'))
        
    }
  }
};