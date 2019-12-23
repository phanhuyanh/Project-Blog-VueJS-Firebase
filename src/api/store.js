import firebase from "firebase";

const store = {};

store.getMyUser = () => firebase.auth().currentUser;

store.getMyBlogs = uid =>
  firebase
    .firestore()
    .collection("blogs")
    .doc(uid)
    .collection("blog")
    .get();

store.getBlog = (uid, bid) =>
  firebase
    .firestore()
    .collection("blogs")
    .doc(uid)
    .collection("blog")
    .doc(bid)
    .get();

store.getUser = uid =>
  firebase
    .firestore()
    .collection("users")
    .doc(uid)
    .get()
    .then(snapshot => snapshot.data())
    .catch(() => "err");

store.getAllBlogs = () =>
  firebase
    .firestore()
    .collection("blogs")
    .get();

store.delBlog = (uid, bid) =>
  firebase
    .firestore()
    .collection("blogs")
    .doc(uid)
    .collection("blog")
    .doc(bid)
    .delete();

store.updateBlog = (uid, bid, data) =>
  firebase
    .firestore()
    .collection("blogs")
    .doc(uid)
    .collection("blog")
    .doc(bid)
    .update(data);

store.updateUser = (uid, dataProfile) =>
  firebase
    .firestore()
    .collection("users")
    .doc(uid)
    .update(dataProfile)
    .then(() => "success")
    .catch(() => "err");

store.addBlog = (uid, blog) => firebase.firestore().collection("blogs").doc(uid).collection("blog").doc(blog.id).set(blog)

store.addNewBlog = (bid, blog) => firebase.firestore().collection("newBlogs").doc(bid).set(blog)

store.updateNewBlog = (bid, blog) => firebase.firestore().collection("newBlogs").doc(bid).update(blog);

store.delNewBlog = (bid) => firebase.firestore().collection("newBlogs").doc(bid).delete();

export default store;
