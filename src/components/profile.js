import Avatar from "./Avatar.vue";
import { mapState } from "vuex";

export default {
  components: {
    Avatar
  },
  data: () => ({
    showInfo: false,
    showNotice: false
  }),
  computed: {
    ...mapState({
      me: state => state.me
    })
  }
};
