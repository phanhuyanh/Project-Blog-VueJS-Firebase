export default {
  data: () => ({
    textSearch: ""
  }),
  methods: {
    searchBlog() {
      this.$emit("searchBlog", this.textSearch);
    }
  }
};
