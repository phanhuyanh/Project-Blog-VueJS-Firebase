import marked from "marked";
import store from "@/api/store.js";
import Loader from "./Loader.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    Loader
  },
  props: {
    isShowModal: Boolean,
    dataProps: Object
  },
  data: () => ({
    isPreview: false,
    title: "",
    description: "",
    isUpdating: false
  }),
  created() {
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.dataProps.description || "", { sanitize: true });
    },
    ...mapGetters([
      'getMe'
    ])
  },
  methods: {
    async updateBlog() {
      this.isUpdating = true;

      var time = { timestamp: Date.now() };

      var obj = { ...this.dataProps, ...time };

      Promise.all([
        store.updateBlog(this.getMe.id, obj.id, obj),
        store.updateNewBlog(obj.id, obj)])
        .then(() => {
          this.$emit('closeShowModal');
          alert('Cập nhật thành công')
        }).catch(() => alert("Cập nhật thất bại")).then(() => this.isUpdating = false);
    }
  }
};
