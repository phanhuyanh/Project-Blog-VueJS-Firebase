<template>
  <div class="acc-basis">
    <div class="form-group">
      <label for="">DisplayName</label>
      <input type="text" class="form-control" v-model="me.displayName" />
    </div>
    <div class="form-group">
      <label for="">Email</label>
      <input type="email" class="form-control" v-model="me.email" />
    </div>
    <div class="form-group">
      <label for="">Phone</label>
      <input type="text" class="form-control" v-model="me.phoneNumber" />
    </div>
    <div class="form-group">
      <label for="">link Github</label>
      <input type="text" class="form-control" v-model="me.linkGithub" />
    </div>
    <div class="form-group">
      <label for="">link Linked</label>
      <input type="text" class="form-control" v-model="me.linkLinked" />
    </div>
    <div class="form-group">
      <div class="-flex -center-x -center-y">
        <router-link
          to="/user-information"
          class="btn btn-outline-primary btn-primary"
          >Go to Profile</router-link
        >
        <button class="btn btn-primary -save-profile" @click="updateProfile()">
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./acc_basic.js"></script>

<style scoped>
.acc-basis input {
  background: #ececec5c;
}

.-save-profile {
  margin-left: 5px;
}
</style>
