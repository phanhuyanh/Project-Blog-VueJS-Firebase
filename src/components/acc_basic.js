import store from "@/api/store.js";

export default {
  data: () => ({
    me: {},
    listAttr: {}
  }),
  created() {
  },
  computed: {
    copy() {
      this.me = {};
      for (let key of Object.keys(this.$store.state.me)) {
        this.me[key] = this.$store.state.me[key];
        this.listAttr[key] = this.$store.state.me[key];
      }
    }
  },
  watch: {
    copy() {}
  },
  methods: {
    async updateProfile() {
      var result = await store.updateUser(this.me.id, this.me);

      if (result == "success") {
        this.$store.commit("updateMe", this.me);
        alert("update success");
      } else {
        alert("update fail");
      }

      this.listAttr = this.me;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (
      Object.entries(this.me).some(
        ([key, value]) => value != this.listAttr[key]
      )
    ) {
      var r = confirm("Bạn chưa lưu thay đổi, tiếp tục rời");

      if (r) next();
      else return;
    }
    next();
  }
};
