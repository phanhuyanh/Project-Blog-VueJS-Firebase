<template>
  <div id="my-profile" class="-grid">
    <div class="fixed bg-black -full-width -full-height" v-if="showModal"></div>
    <div class="modal modal-update-avatar" v-if="showModal">
      <template v-if="isLoadUpload">
        <loader />
      </template>
      <template v-else>
        <div class="close" @click="reset()">
          <span><i class="fas fa-times"></i></span>
        </div>
        <h3 class="-text-align">Upload Profile Picture</h3>
        <div class="form-group">
          <label for="file" class="btn btn-primary -full-width"
            >choose file</label
          >
          <input
            type="file"
            class="form-control"
            id="file"
            @change="e => showPreview(e)"
          />
        </div>
        <div class="div-priview-img" v-if="isShowPreview">
          <img id="img-preview" class="-full-width -full-height" />
        </div>
        <div class="upload-profile" :class="{ 'pointer-event': !isChooseImg }">
          <div @click="uploadAvatar()">upload</div>
        </div>
      </template>
    </div>
    <div class="my-profile-info relative">
      <div class="edit-profile absolute" title="edit profile">
        <router-link to="/account/basic">
          <span><i class="fas fa-edit"></i></span>
        </router-link>
      </div>
      <div
        class="-invidual -flex -center-x -center-y -flex-direction-col relative"
      >
        <avatar p_width="100" p_height="100" :img_prop="me.photoURL"></avatar>
        <div
          class="wrap-avatar absolute -none cursor-pointer"
          @click="showModal = true"
        >
          <span class="-full-width -full-height -flex -center-x -center-y"
            ><i class="fas fa-camera"></i
          ></span>
        </div>
        <h3>{{ me.displayName }}</h3>
      </div>
      <p class="text-overflow mar-b-15">
        <span class="-inl-block mar-r-5"><i class="fas fa-envelope"></i></span
        >{{ me.email }}
      </p>
      <p class="text-overflow mar-b-15">
        <span class="-inl-block mar-r-5"><i class="fas fa-phone-alt"></i></span
        >{{ me.phoneNumber }}
      </p>
      <div class="text-overflow mar-b-15">
        <span class="-inl-block mar-r-5"
          ><i class="fab fa-github-square"></i></span
        ><a href="https://github.com/phanhuyanh">{{ me.linkGithub }}</a>
      </div>
      <div class="text-overflow mar-b-15">
        <span class="-inl-block mar-r-5"><i class="fab fa-linkedin"></i></span
        ><a href="https://www.linkedin.com/in/profile">{{ me.linkLinked }}</a>
      </div>
    </div>
    <div class="exp -grid">
      <div class="languages">
        <div class="title -title">
          LANGUAGES
        </div>
        <div class="list-languages -list">
          <ul>
            <li>
              <span class="mar-r-5"><i class="fab fa-js-square"></i></span>
              JavaScript
            </li>
            <li>
              <span class="mar-r-5"><i class="fab fa-php"></i></span> PHP
            </li>
            <li>
              <span class="mar-r-5"><i class="fab fa-html5"></i></span> HTML5
            </li>
            <li>
              <span class="mar-r-5"><i class="fab fa-vuejs"></i></span> VueJS
            </li>
          </ul>
        </div>
      </div>
      <div class="tools">
        <div class="title -title">TOOLS</div>
        <div class="list-tools -list">
          <ul>
            <li>
              <span class="mar-r-5"><i class="fab fa-bootstrap"></i></span>
              Bootstrap
            </li>
            <li>
              <span class="mar-r-5"><i class="fab fa-git-alt"></i></span> Git
            </li>
            <li>
              <span class="mar-r-5"><i class="fab fa-node"></i></span> NodeJS
            </li>
            <li>
              <span class="mar-r-5"><i class="fab fa-vuejs"></i></span> VueJS
            </li>
          </ul>
        </div>
      </div>
      <div class="analist">
        <canvas width="400px" height="200px" id="myChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script src="./my_profile.js"></script>

<style scoped>
#my-profile {
  grid-template-columns: 35% 65%;
  grid-column-gap: 15px;
}

.my-profile-info {
  background: #fff;
  padding: 15px;
}

.my-profile-info h3 {
  text-align: center;
  margin: 15px;
}

.my-profile-info a {
  color: #548eff;
}

.exp {
  grid-row-gap: 15px;
}

.exp .languages,
.tools {
  background: #fff;
  padding: 0 15px;
}

.exp .-title {
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
}

.exp .-list {
  padding: 15px 0;
}

.exp .-list ul {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-column-gap: 15px;
}

.exp .-list ul li {
  padding: 10px 20px;
  background: #d4d4d46e;
  border-radius: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-profile {
  top: 0;
  right: 0;
}

.edit-profile a {
  color: #181818;
}

.wrap-avatar {
  width: 100px;
  height: 100px;
  background: #18181836;
  top: 0;
  z-index: 1;
}

.wrap-avatar span i {
  font-size: 20px;
}

.-invidual:hover .wrap-avatar {
  display: block;
}

.modal-update-avatar {
  width: 400px;
  margin: auto;
  z-index: 3;
  left: calc((100% - 300px) / 2);
  right: calc((100% - 300px) / 2);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.modal-update-avatar h3 {
  color: #333;
  font-weight: 100;
  margin-bottom: 10px;
  padding: 15px;
  text-align: center;
}

.upload-profile {
  margin-top: auto;
  padding: 15px;
  border-top: 1px solid #ccc;
  text-align: center;
  text-transform: uppercase;
  color: #548eff;
  font-weight: bold;
  cursor: pointer;
}
.upload-profile:hover {
  color: #548effc9;
}

.bg-black {
  background: #00000085;
  left: 0;
  top: 0;
  z-index: 2;
}

[type="file"] {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
}

[type="file"] + label {
  background-color: #000;
  border-radius: 4rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  padding-left: 2rem 4rem;
}

[type="file"]:focus + label,
[type="file"] + label:hover {
  background-color: #f15d22;
}

[type="file"]:focus + label {
  outline: 1px dotted #000;
}

.div-priview-img {
  padding: 15px;
  height: 300px;
}

.div-priview-img img {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px dashed #000;
}
</style>
