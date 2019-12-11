import firebase from "firebase";

var chars = `abcdefghijkmnlopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;

const generateKey = () => {
  var strKey = "";

  for (let i = 0; i < 15; i++) {
    var num = Math.random() * 61;

    num = Math.floor(num);

    strKey += chars[num];
  }

  return strKey;
};

const main = async () => {
  var objKey = await firebase
    .database()
    .ref("storeKey")
    .once("value")
    .then(data => data.val());

  var storeKey = JSON.parse(objKey.key);
  var strKey = generateKey();

  do {
    strKey = generateKey();
  } while (storeKey.some(e => e === strKey));

  storeKey.push(strKey);

  await firebase
    .database()
    .ref("storeKey")
    .set({
      key: JSON.stringify(storeKey)
    });

  return strKey;
};

export default main;
