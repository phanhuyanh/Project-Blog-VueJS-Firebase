<template>
  <div class="sign-in">
    <div class="container -ful-width -full-height">
      <div class="-flex -center-x -center-y -full-width -full-height -flex-direction-col">
        <div class="wrap">
          <div class="form-sign-in">
            <div class="title -text-center">
              <h3>Sign In</h3>
            </div>
            <div class="form-group -flex">
              <span>
                <i class="fas fa-envelope"></i>
              </span>
              <input type="email" class="form-control" placeholder="Email" v-model="email"/>
            </div>
            <div class="form-group -flex">
              <span>
                <i class="fas fa-lock"></i>
              </span>
              <input type="password" class="form-control" placeholder="Password" v-model="password"/>
            </div>
            <div class="submit -text-center">
              <button class="btn btn-success" @click="signIn()">Sign In</button>
            </div>
          </div>
          <div class="sign-in-other">
            <div class="title">Or Connect With:</div>
            <div class="-flex -center-x -center-y">
              <button class="btn btn-primary" @click="signInFacebook()">Facebook</button>
              <button class="btn btn-danger" @click="signInGoogle()">Google</button>
            </div>
          </div>
        </div>
        <div class="no-account">No Account, <router-link to="/sign-up">sign up</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    signIn() {
      if (!this.email || !this.password) {
        alert("cac truong k duoc de trong");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push("/"))
        .catch(() => alert("loi dang ky"));
    },
    signInGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => this.$router.replace("/"))
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
    signInFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();

       firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          result => (console.log(result.user), this.$router.replace("/"))
        )
        .catch(function(error) {
          console.log("loi", error)
        });
    }
  }
};
</script>

<style scoped>
.sign-in {
  height: 100vh;
}

.wrap {
  border: 1px solid #ccc;
  padding: 15px;
  width: 30%;
}

.form-sign-in {
    padding-bottom: 30px;
    border-bottom: 1px solid #ccc;
}

.form-sign-in .title {
  margin-bottom: 15px;
}

.form-sign-in .form-group span {
  margin-right: 15px;
}

.sign-in-other .title{
    text-align: center;
    margin: 15px 0;
}

.sign-in-other button {
    margin-right: 5px;
}

.no-account {
  margin-top: 15px;
}

.no-account a {
  color: #0095ff;
}

.no-account a:hover {
  text-decoration: underline;
}

</style>