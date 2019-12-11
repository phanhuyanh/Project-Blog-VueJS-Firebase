import marked from "marked";
import generateKey from "../common/generate_key.js";
import firebase from "firebase";
import Loader from "./Loader.vue";

export default {
  components: {
    Loader
  },
  data: () => ({
    input: "",
    title: "",
    isLoading: false
  }),
  created() {},
  computed: {
    compiledMarkdown: function() {
      return marked(this.input || "", { sanitize: true });
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.input || this.title) {
      var r = confirm(
        "Bạn vẫn chưa lưu thay đổi, rời đi sẽ xóa hết sự thay đổi."
      );

      if (r) next();
    }
    if (!this.input && !this.title) next();
  },
  methods: {
    async postBlog() {
      this.isLoading = true;
      var user = firebase.auth().currentUser;
      var key = await generateKey();

      var db = firebase.firestore();

      db.collection("blogs")
        .doc(user.uid)
        .collection("blog")
        .doc(key)
        .set({
          id: key,
          description: this.input,
          timestamp: Date.now(),
          title: this.title,
          author_id: user.uid
        })
        .then(() => {
          this.isLoading = false;
          alert("thanh cong");
          this.input = "";
          this.title = "";
        })
        .catch(() => alert("that bai"));
    }
  }
};
