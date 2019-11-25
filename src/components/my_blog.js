import Search from "./Search.vue";
import Pagination from "./Pagination.vue";
import BlogItem from './BlogItem.vue';
import Loader from './Loader.vue';
import store from '../api/store.js';
import ModalEditBlog from './ModalEditBlog.vue';

export default {
  components: {
    Search,
    Pagination,
    BlogItem,
    Loader,
    ModalEditBlog
  },
  data: () => ({
      listBlog: [],
      isLoading: false,
      limit: 5,
      page: 1,
      listNav: [],
      tempListBlog: [],
      pageCur: 0,
      max_page: 1
  }),
  async created() {
      this.isLoading = true;

      var user = store.getMyUser();
      
      var temp = await store.getMyBlogs(user.uid);

      for(let doc of temp.docs) {
          let item = await store.getBlog(user.uid, doc.id);

          this.listBlog.push(item.data());
      }

      this.listBlog.sort((a,b) => b.timestamp - a.timestamp);

      this.tempListBlog = this.listBlog;
      this.max_page = Math.ceil(this.listBlog.length / this.limit);
      this.isLoading = false;
  },
  methods: {
    searchBlog(data) {
      if(!data || !data.trim()) this.tempListBlog = this.listBlog;

      this.tempListBlog = this.listBlog.filter(e => e.title.includes(data) || e.description.includes(data))
    },
    nextPage(idx) {
      this.pageCur = idx;
      this.page = idx + 1;
    },
    delBlogItem(id) {
      this.listBlog = this.listBlog.filter(e => e.id != id);
    }
  },
  computed: {
    listBlogLimit() {
      var start = this.limit * (this.page - 1);
      var end = start + this.limit;

      return this.tempListBlog.slice(start, end);
    },
    createPag() {
      this.listNav = [];
      var len = this.tempListBlog.length;
      var num_page = Math.ceil(len / this.limit);

      if(num_page < 2) return [];

      this.listNav.push(1);

      if(this.page === 1) {
        if(num_page > 3) this.listNav.push(2, '...', num_page);
        else {
          this.listNav.push(2);
          if(num_page > 2) this.listNav.push(num_page)
        }
      }
      else if(this.page === num_page) {
        if(this.page > 3) this.listNav.push('...', this.page - 1, this.page);
        else {
          if(this.page == 2) this.listNav.push(this.page);

          else this.listNav.push(this.page - 1, this.page);
        }
      }
      else {

        if(this.page > 3) this.listNav.push('...');

        if(this.page > 2) this.listNav.push(this.page - 1)

        this.listNav.push(this.page);

        if(this.page + 1 == num_page) this.listNav.push(this.num_page);

        else if(this.page + 2 <  num_page) this.listNav.push(this.page + 1, '...', num_page);
      }

      return this.listNav
    }
  }
};