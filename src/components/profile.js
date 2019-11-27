import Avatar from "./Avatar.vue";
import store from '../api/store.js';

export default {
  components: {
    Avatar
  },
  data: () => ({
      showInfo: false,
      showNotice : false,
      me: {}
  }),
  async created() {
      var user = await store.getMyUser();

      this.me = await store.getUser(user.uid);
      this.me = this.me.data();
  }
};