<template>
  <div id="all-video">
      <div class="video-main">
          <div class="video-head -layout-h -center-y">
              <div class="video-head--logo">
                  Vi <span>deo</span>
              </div>
              <div class="video-head--search -layout-h -center-y">
                  <input type="text" placeholder="Search">
                  <button><i class="fas fa-search"></i></button>
              </div>
              <div class="video-head--info">
                  <avatar></avatar>
              </div>
          </div>
          <div class="video-body">
              <div class="card-group">
                  <div class="card" v-for="(item, idx) in list" :key="idx">
                      <div class="card-poster">
                          <img src="https://via.placeholder.com/150" alt="">
                      </div>
                      <div class="card-info">
                          <div class="author">
                              <avatar></avatar>
                          </div>
                          <div class="card-text">
                              <p class="card-title">Tu Do - Phan Manh Quynh | Mat Biec OST</p>
                              <p class="card-channel">Phan Manh Quynh Offical</p>
                              <div class="card-time">
                                  <span class="card-view">1 views *</span>
                                  <span class="post-time">1 hour ago</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
      <div class="video-navbar">
          <ul>
              <li>
                  <router-link to="/" class="-layout-v">
                      <i class="fas fa-home"></i>
                      <span>Home</span>
                  </router-link>
              </li>
              <li>
                  <a href="#" class="-layout-v">
                      <i class="fas fa-fire"></i>
                      <span>Trending</span>
                  </a>
              </li>
              <li>
                  <a href="#" class="-layout-v">
                      <i class="fas fa-folder"></i>
                      <span>Library</span>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Avatar from './Avatar.vue';
export default {
    components: {
        Avatar
    },
    data() {
        return {
            list: new Array(20).fill([])
        }
    }
}
</script>

<style scoped>
#all-video {
    background-color: #ccc3;
    min-height: 100vh;
    display: flex;
    flex-direction: row-reverse;
}

.video-main {
    flex-basis: 100%;
}

.video-head {
    position: sticky;
    top: 0;
    padding: 15px 30px 15px 30px;
    justify-content: space-between;
    background-color: #fff;
}

.video-head--logo {
    font-size: 2rem;
    font-weight: bold;
}

.video-head--logo span {
    margin-left: -10px;
    color:lawngreen;
}

.video-head--search {
    border: 1px solid #ccc;
    height: 30px;
    border-radius: 4px;
    justify-content: space-between;
    width: 400px;
}

.video-head--search input {
    border: none;
    background: none;
    outline: 0;
    padding: 15px;
}

.video-head--search button{
    height: 100%;
    border: none;
    padding: 5px 15px;
    outline: 0;
    background: #efefef;
    cursor: pointer;
}

.video-navbar {
    position: sticky;
    top: 0;
    left: 0;
    background: #fff;
    flex-basis: 60px;
    padding: 70px 0px;
}

.video-navbar ul li {
    padding: 15px;
}

.video-navbar ul li:hover {
    background: #e2e2e2;
}

.video-navbar ul li a {
    display: flex;
    justify-content: center;
    align-items: center;
}

.video-navbar ul li span {
    font-size: 13px;
    margin-top: 5px;
}

.video-body {
    width: 100%;
    padding: 30px;
}

.card-group {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 45px;
    grid-template-rows: auto;
}

.card {
    cursor: pointer;
}

.card-poster {
    height: 190px;
    margin-bottom: 15px;
}

.card-poster img {
    width: 100%;
    height: 100%;
}

.card-info {
    display: flex;
}

.card-text {
    margin-left: 5px;
    font-size: 16px;
    color: #545454;
}

.card-title {
    font-weight: bold;
    line-height: 20px;
    color: #000;
    margin-bottom: 5px;
}

.card-channel {
    font-size: 14px;
    margin-bottom: 5px;
}

.card-time {
    font-size: 12px;
}

.card-view {
    margin-right: 5px;
}
</style>