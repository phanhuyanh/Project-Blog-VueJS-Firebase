export default {
    props: {
      listBlog: Number
    },
  data: () => ({
      limit: 5,
      listNav: [],
  }),
  computed: {
    createPag() {
      this.listNav = [];
      var len = this.listBlog;
      var page = this.$route.params.id;
      var num_page = Math.ceil(len / this.limit);

      if (num_page < 2) return [];

      this.listNav.push(1);
 
      if (page == 1) {
        if (num_page > 3) this.listNav.push(2, "...", num_page);
        else {
          this.listNav.push(2);
          if (num_page > 2) this.listNav.push(num_page);
        }
      } else if (page === num_page) {
        if (page > 3) this.listNav.push("...", page - 1, page);
        else {
          if (page == 2) this.listNav.push(page);
          else this.listNav.push(page - 1, page);
        }
      } else {
        if (page > 3) this.listNav.push("...");

        if (page > 2) this.listNav.push(page - 1);

        this.listNav.push(page);

        if (page + 1 == num_page) this.listNav.push(this.num_page);
        else if (page + 2 < num_page)
          this.listNav.push(page + 1, "...", num_page);
      }
      return this.listNav;
    }
  }
};
