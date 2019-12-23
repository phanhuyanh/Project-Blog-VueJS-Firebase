import store from "@/api/store.js";
import ModalEditBlog  from './ModalEditBlog.vue';
import { mapGetters } from 'vuex';

export default {
  props: {
    blog: Object
  },
  components: {
    ModalEditBlog
  },
  data: function() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapGetters([
      'getMe'
    ])
  },
  methods: {
    showModalEdit() {
      this.showModal = true;
    },
    dateFormat(timestamp) {
      var date = new Date(timestamp);

      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
    async deleteBlog() {
      var me = this.getMe;

      var r = confirm("bạn có muốn xóa không");

      if (r) {
        Promise.all([
          store.delBlog(me.id, this.blog.id),
          store.delNewBlog(this.blog.id)
        ]).then(() => {
          this.$emit('delBlogItem', this.blog.id);
          alert('success');
        }).catch(() => alert('Xoa that bai'));
        // var result = await store
        //   .delBlog(me.id, this.blog.id)
        //   .then(() => "success")
        //   .catch(() => "err");

        // if (result === "err") {
        //   alert("Xóa thất bại");
        // } else this.$parent.delBlogItem(this.blog.id);
        
      }
    }
  }
};
