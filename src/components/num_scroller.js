import ICountUp from "vue-countup-v2";

export default {
  components: {
    ICountUp
  },
  data: () => ({
    delay: 1000,
    numUsers: 500,
    numBlogs: 500
  }),
  methods: {
    onReadyUser: function(instance) {
      const that = this;

      instance.update(that.numUsers);
    },
    onReadyBlog(instance) {
      instance.update(this.numBlogs);
    }
  }
};
