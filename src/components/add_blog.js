import marked from 'marked';
import generateKey from '../common/generate_key.js';
import firebase from 'firebase';

export default {
  data: () => ({
    input: ""
  }),
  created() {
      firebase.firestore().collection("blogs").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`, doc.data().description);
            this.input = doc.data().description;
        });
    });
    var t = firebase.firestore().collection("blogs").orderBy('createdAt')

    console.log("t" , t)
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    async postBlog() {
        var key = await generateKey();

        var db = firebase.firestore();

        db.collection("blogs").add({
            id: key,
            description: this.input,
            timestamp: Date.now()
        }).then(() => console.log("thanh conf"))
        .catch(() =>console.log('that bai'))
        //console.log(this.input, typeof this.input, this.input.length)
    }
  }
};