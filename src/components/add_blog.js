import marked from 'marked';
import generateKey from '../common/generate_key.js';
import Loader from './Loader.vue';
import store from '@/api/store.js';

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
      var r = confirm('Bạn vẫn chưa lưu thay đổi, rời đi sẽ xóa hết sự thay đổi.')

      if (r) next();
    }
    if (!this.input && !this.title) next();
  },
  methods: {
    async postBlog() {
      this.isLoading = true;
      var user = await store.getMyUser()
      var key = await generateKey();

      //var db = firebase.firestore();

      var blog = {
        id: key,
        description: this.input,
        timestamp: Date.now(),
        title: this.title,
        author_id: user.uid
      }

      Promise.all([
        store.addBlog(user.uid, blog),
        store.addNewBlog(key, blog)
      ]).then(() => {
        this.isLoading = false;
        this.input = '';
        this.title = '';
        alert('thanh cong');
      }).catch(() => alert('that bai'))
    }
  }
};
