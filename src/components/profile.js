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
  created() {
      this.me = store.getMyUser(); 
  }
};