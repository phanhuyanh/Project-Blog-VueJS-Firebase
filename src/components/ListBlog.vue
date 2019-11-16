<template>
  <div id="list-blog">
    <loader v-if="isLoading"/>
    <div class="container" v-else>
      <div class="-layout -flex">
        <div class="menu-bar">
          <nav>
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="list-blog-main">
          <div class="list-blog-title -flex">
            <div class="all-blog">
              All Blog
            </div>
            <router-link class="btn btn-primary" to="/user-information/add-blog">Post Blog</router-link>
          </div>
          <div class="-flex list-blog-info">
              <p>{{ listBlog.length }} blogs</p>
              <search></search>
          </div>
          <div class="-grid main-blog">
            <blog 
                v-for="([itemBlog, creator]) in listBlogMaxPage" 
                :key="itemBlog.id"
                :blog="itemBlog"
                :creator="creator"
            ></blog>
          </div>
          <pagination :listBlog="listBlog"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./list_blog.js"></script>

<style scoped>
#list-blog {
  background: #fff;
  padding: 50px 0;
}

.main-blog {

}

.list-blog-title {
  padding: 0 30px;
  justify-content: space-between;
}

.list-blog-title .all-blog a {
  color: #181818;
}

.list-blog-title .all-blog a:hover {
  text-decoration: underline;
}

.list-blog-main {
    flex-basis: 80%;
}

.menu-bar {
    border-right: 1px solid #ccc;
}

.menu-bar nav ul {
    list-style-type: none;
}

.menu-bar nav ul li {
    padding: 0 15px;
}

.menu-bar nav ul li a {
    color: #535a60;
}

.menu-bar nav ul li a:hover {
    color: #000000;
}

.list-blog-info {
    justify-content: space-between;
    padding: 15px 30px;
    border-bottom: 1px solid #ccc;
}
</style>