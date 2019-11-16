<template>
  <div id="profile">
    <div class="notice" @click="showNotice = !showNotice" v-if="me">
      <span>
        <i class="fas fa-bell"></i>
      </span>
      <div class="notice-info" v-if="showNotice">
          <div class="list-items">
              <div class="item">
                  <avatar></avatar>
                  <div class="item-content">
                      <p>Đã bình luận về bài viết LifeCycle Hook VueJS</p>
                      <p class="time"><span></span> 2 days ago</p>
                  </div>
              </div>
              <div class="item">
                  <avatar p_width="30" p_height="30"></avatar>
                  <div class="item-content">
                      <p>Đã bình luận về bài viết LifeCycle Hook VueJS</p>
                      <p class="time"><span></span> 2 days ago</p>
                  </div>
              </div>
          </div>
          <div class="see-all">
              <a href="#">See all</a>
          </div>
      </div>
    </div>
    <div class="view" @click="showInfo = !showInfo">
      <avatar></avatar>
      <div class="drop-down" v-if="me">
        <span>
          <i class="fas fa-chevron-down" :class="{'rotate-90': showInfo}"></i>
        </span>
      </div>
      <div class="view-info" v-show="showInfo" v-if="me" @blur="showInfo = false">
          <ul>
              <li><router-link to="/user-information">My Profile</router-link></li>
              <li><router-link to="/user-information/my-blog">My Blog</router-link></li>
              <li><router-link to="/user-information/add-blog">Add Blog</router-link></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script src="./profile.js"></script>

<style scoped>

.item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border: 1px solid #eaeaea;
}

.item:hover {
    background: #f3f3f3;
}

.see-all {
    text-align: center;
    padding: 10px 0;
}

.see-all a {
    text-decoration: none;
    color: #1c73f7;
}

.see-all a:hover {
    text-decoration: underline;
}

.item .item-content {
    margin-left: 15px;
    color: #181818;
    font-size: 0.9rem;
}

.item-content .time {
    margin-top: 5px;
    display: flex;
    align-items: center;
}

.item-content .time span {
    width: 5px;
    height: 5px;
    background: #1c73f7;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
}

.drop-down span i{
    transition: .3s;
}

.rotate-90 {
    transform: rotate(180deg);
    transition: .3s;
}

.notice {
  cursor: pointer;
  position: relative;
}

.notice-info {
    position: absolute;
    background: #fff;
    right: -60px;
    top: 130%;
    border: 1px solid #d8d1d1;
    width: 300px;
    box-shadow: 0 4px 12px #dedede7d;
    max-height: 500px;
    overflow-y: auto;
}


.view {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
}

.drop-down {
    margin-left: 5px;
    font-size: 1.2rem;
    transform: translateY(1px)
}
.view-info {
    position: absolute;
    background: #fff;
    left: -86%;
    top: 100%;
    border: 1px solid #d8d1d1;
    width: 150px;
    box-shadow: 0 4px 12px #dedede7d;
}

.view-info ul {
    list-style: none;
    /* padding: 10px 0; */
}

.view-info ul li {
    margin-bottom: 10px;
    padding: 10px 15px;
}

.view-info ul li:last-child {
    margin: 0;
}


.view-info ul li:hover {
    background: #f3f3f3;
}

.view-info ul li a {
    text-decoration: none;
    color: #181818;
    font-size: 1.1rem;
}

.view {
    display: flex;
    align-items: center;
}

div#profile {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 10px;
  align-items: center;
}

</style>