import store from "@/api/store.js";
import  { bus }  from '@/main.js';

export default {
  props: {
    id: String,
    title: String,
    description: String,
    timestamp: Number,
    author_id: String
  },
  methods: {
    showModalEdit() {
      var id = this.id;
      var title = this.title;
      var description = this.description;
      var author_id = this.author_id;

      bus.$emit('showModal', {id, title, description, author_id});
    },
    dateFormat(timestamp) {
      var date = new Date(timestamp);

      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
    async deleteBlog() {
      var me = await store.getMyUser();

      var r = confirm("bạn có muốn xóa không");

      if (r) {
        var result = await store
          .delBlog(me.uid, this.id)
          .then(() => "success")
          .catch(() => "err");

        if (result === "err") {
          alert("Xóa thất bại");
        } else this.$parent.delBlogItem(this.id);
      }
    }
  }
};
