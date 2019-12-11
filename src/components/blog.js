import Avatar from "./Avatar.vue";
import marked from "marked";

export default {
  props: {
    blog: Object,
    creator: Object
  },
  components: {
    Avatar
  },
  filters: {
    timeDisplay: function(timestamp) {
      var date = new Date(timestamp);

      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
  },
  data: () => ({
    showOption: false
  }),
  created() {},
  methods: {
    compiledMarkdown(text) {
      return marked(text || "", { sanitize: true });
    }
  }
};
