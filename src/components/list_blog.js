import Blog from "./Blog.vue";
import Search from "./Search.vue";
import Pagination from "./Pagination.vue";
import firebase from 'firebase';
import Loader from './Loader.vue';

export default {
  components: {
    Blog,
    Search,
    Pagination,
    Loader
  },
  data: () => ({
    listBlog: [],
    limit: 5,
    isLoading: false
  }),
  async created() {
    this.isLoading = true;
    var db = firebase.firestore();

    var all_blog = await db.collection("blogs").get();

    for(let doc of all_blog.docs) {
      var user = await db.collection("users").doc(doc.id).get();

      var data = await db.collection("blogs").doc(doc.id).collection("blog").get();

      for(let blog of data.docs) {
        var item = await db.collection("blogs").doc(doc.id).collection("blog").doc(blog.id).get();
        this.listBlog.push([item.data(), user.data()]);
      }
    }
    this.listBlog.sort((a,b) => b[0].timesatamp - a[0].timesatamp);

    this.isLoading = false;
  },
  computed: {
    listBlogMaxPage() {
      var page = this.$route.params.id - 1;
      var start = this.limit * page;
      var end = start + this.limit;

      return this.listBlog.slice(start, end);
    }
  }
};