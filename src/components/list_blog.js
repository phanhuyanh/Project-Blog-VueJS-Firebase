import Blog from "./Blog.vue";
import Search from "./Search.vue";
import Pagination from "./Pagination.vue";
import firebase from 'firebase';

export default {
  components: {
    Blog,
    Search,
    Pagination
  },
  data: () => ({
    listBlog: []
  }),
  async created() {
    var db = firebase.firestore();

    var all_blog = await db.collection("blogs").get();

    //console.log("all blog: ", all_blog.docs)

    for(let doc of all_blog.docs) {
      var user = await db.collection("users").doc(doc.id).get();

      var data = await db.collection("blogs").doc(doc.id).collection("blog").get();
      //console.log("data:" , data)
      for(let blog of data.docs) {
        var item = await db.collection("blogs").doc(doc.id).collection("blog").doc(blog.id).get();
        //console.log("item: ", item.data())
        //console.log("user: ", user.data())
        this.listBlog.push([item.data(), user.data()])
      }
    }
    this.listBlog.sort((a,b) => b[0].timesatamp - a[0].timesatamp);

    //console.log("list blog: ", this.listBlog)
  }
};