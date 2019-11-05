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
        var key = await generateKey();
        var user = firebase.auth().currentUser;
        var db = firebase.firestore();
        
        db.collection("blogs").doc(user.uid).set({
            id: key,
            description: this.input,
            timestamp: Date.now(),
            title: this.title
        }).then(() => console.log("thanh cong"))
        .catch(() =>console.log('that bai'))
        //console.log(this.input, typeof this.input, this.input.length)
        
      //  console.log("title: " + this.title)
      //  console.log("description: " + this.input)

      //  //console.log("user: ", user)
      //  console.log("user ID: "+ user.uid)
      //  console.log("display name: " + user.displayName)
      //  console.log("user email: " + user.email)
      //  console.log("user photo: " + user.photoURL)
      //  console.log("key: " + key)
       
    }
  }
};