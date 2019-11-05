<template>
  <div class="avatar" 
    :style="{width: width + 'px', height: height + 'px'}">
      <div class="avatar-border -full-width -full-height" :style="{width: width + 'px', height: height + 'px'}">
          <img :src="img_src" 
          alt="" class="-full-width -full-height"
          :style="{width: width + 'px', height: height + 'px'}">
      </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
    props: {
        p_width: String,
        p_height: String
    },
    data: () => ({
        img_src: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
        width: 30,
        height: 30 
    }),
    created() {
        var user = firebase.auth().currentUser;

        if(user) {
            this.img_src = user.photoURL;
        }
        this.width = this.p_width || 30;
        this.height = this.p_height || 30;
    }
}
</script>

<style scoped>
.avatar {
    width: 100%;
    height: 30px;
    cursor: pointer;
}

.avatar .avatar-border img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
}

</style>