import Search from "./Search.vue";
import Pagination from "./Pagination.vue";
import firebase from 'firebase';
import BlogItem from './BlogItem.vue';

export default {
  components: {
    Search,
    Pagination,
    BlogItem
  },
  data: () => ({
      listBlog: []
  }),
  async created() {
      var user = firebase.auth().currentUser;
      
      var temp = await firebase.firestore().collection("blogs").doc(user.uid).collection("blog")
                          .get().then(data => data).catch(err => console.log(err))

      for(let doc of temp.docs) {
          let item = await firebase.firestore().collection("blogs").doc(user.uid).collection("blog").doc(doc.id).get().then(data => data);

          this.listBlog.push(item.data());
      }
  },
  methods: {
  }
};