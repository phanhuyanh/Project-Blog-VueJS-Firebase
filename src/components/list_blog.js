import Blog from "./Blog.vue";
import Search from "./Search.vue";
import Pagination from "./Pagination.vue";
import Loader from "./Loader.vue";
import store from "@/api/store.js";
import firebase from 'firebase';

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
    isLoading: false,
    listTempBlog: []
  }),
  async created() {
    this.isLoading = true;

    var allBlog = await firebase.firestore().collection("newBlogs").get();

    for(let blog of allBlog.docs) {
      var author = await store.getUser(blog.data().author_id)

      this.listBlog.push([blog.data(), author.data()])
    }
    
    this.listBlog.sort((a, b) => b[0].timestamp - a[0].timestamp);
    this.listTempBlog = this.listBlog;
    this.isLoading = false;
  },
  computed: {
    listBlogMaxPage() {
      var page = this.$route.params.id - 1;
      var start = this.limit * page;
      var end = start + this.limit;

      return this.listTempBlog.slice(start, end);
    }
  },
  methods: {
    searchBlog(data) {
      if(!data || !(data.trim())) this.listTempBlog = this.listBlog;

      this.listTempBlog = this.listBlog.filter(([blog]) => blog.title.includes(data) || blog.description.includes(data));

      if(this.$route.params.id != 1) this.$router.push("/blog/page/1")
    },
  }
};
