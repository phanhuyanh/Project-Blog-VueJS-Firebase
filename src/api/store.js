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

export default store;
