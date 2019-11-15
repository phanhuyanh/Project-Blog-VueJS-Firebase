<template>
  <div class="sign-up">
    <div class="container -ful-width -full-height">
      <div class="-flex -center-x -center-y -full-width -full-height -flex-direction-col">
        <div class="wrap">
          <div class="form-sign-up">
            <div class="title -text-center">
              <h3>Sign Up</h3>
            </div>
            <div class="form-group -flex">
              <span>
                <i class="fas fa-user"></i>
              </span>
              <input type="text" class="form-control" placeholder="Full Name" v-model="fullName" />
            </div>
            <div class="form-group -flex">
              <span>
                <i class="fas fa-envelope"></i>
              </span>
              <input type="email" class="form-control" placeholder="Email" v-model="email" />
            </div>
            <div class="form-group -flex">
              <span>
                <i class="fas fa-lock"></i>
              </span>
              <input type="password" class="form-control" placeholder="Password" v-model="password" />
            </div>
            <div class="submit -text-center">
              <button class="btn btn-success" @click="signUp">Create An Account</button>
            </div>
          </div>
          <div class="sign-up-other">
            <div class="title">Or Connect With:</div>
            <div class="-flex -center-x -center-y">
              <button class="btn btn-primary" @click="signUpFacebook()">Facebook</button>
              <button class="btn btn-danger" @click="signUpGoogle()">Google</button>
            </div>
          </div>
        </div>
        <div class="is-account">
          Has Account,
          <router-link to="/sign-in">sign in</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data: () => ({
    fullName: "",
    email: "",
    password: ""
  }),
  methods: {
    signUp() {
      if (!this.fullName || !this.email || !this.password) {
        alert("cac truong k duoc de trong");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push("/"))
        .catch(() => alert("loi dang ky"));
    },
    signUpGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
          console.log(token, user)
          
          return this.$router.replace("dashboard")
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          console.log("loi dang nhap", errorCode, errorMessage, email, credential)
        });
    },
    signUpFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();

       firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          result => (console.log(result.user), this.$router.replace("dashboard"))
        )
        .catch(function(error) {
          console.log("loi", error)
        });
    }
  }
};
</script>

<style scoped>
.sign-up {
  height: 100vh;
}

.wrap {
  border: 1px solid #ccc;
  padding: 15px;
  width: 30%;
}

.form-sign-up {
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
}

.form-sign-up .title {
  margin-bottom: 15px;
}

.form-sign-up .form-group span {
  margin-right: 15px;
}

.sign-up-other .title {
  text-align: center;
  margin: 15px 0;
}

.sign-up-other button {
  margin-right: 5px;
}

.is-account {
  margin-top: 15px;
}

.is-account a {
  color: #0095ff;
}

.is-account a:hover {
  text-decoration: underline;
}
</style>