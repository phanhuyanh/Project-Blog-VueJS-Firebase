import firebase from 'firebase';

const store = {};

store.getMyUser = () => firebase.auth().currentUser

store.getMyBlogs = uid => firebase.firestore().collection("blogs").doc(uid).collection("blog").get()

store.getBlog = (uid, bid) => firebase.firestore().collection("blogs").doc(uid).collection("blog").doc(bid).get()

export default store;


