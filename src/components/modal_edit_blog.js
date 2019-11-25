import marked from "marked";
import { bus } from "@/main.js";
import store from "@/api/store.js";
import Loader from "./Loader.vue";

export default {
  components: {
    Loader
  },
  data: () => ({
    isPreview: false,
    title: "",
    description: "",
    isShowModal: false,
    dataProps: {},
    isUpdating: false
  }),
  created() {
    bus.$on("showModal", data => {
      this.isShowModal = true;
      this.dataProps = data;
    });
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.dataProps.description || "", { sanitize: true });
    }
  },
  methods: {
    async updateBlog() {
      this.isUpdating = true;
      var me = await store.getMyUser();

      var time = { timestamp: Date.now() };

      var obj = { ...this.dataProps, ...time};

      store
        .updateBlog(me.uid, obj.id, obj)
        .then(() => {
          this.isUpdating = false;
          this.isShowModal = false;

          let idx = this.$parent.listBlog.findIndex(
            e => e.id === this.dataProps.id
          );

          this.$parent.listBlog[idx] = obj;

          this.$parent.listBlog.unshift({});

          this.$parent.listBlog.shift();

          alert("Cập nhật thành công");
        })
        .catch(() => {
          alert("Cập nhật thất bại");
        });
    }
  }
};
