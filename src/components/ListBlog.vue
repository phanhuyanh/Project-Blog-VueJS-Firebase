<template>
  <div id="list-blog">
      <div class="container">
          <div class="list-blog-title -flex">
              <div class="all-blog"><a href="#">All Blog</a></div>
              <div class="search">
                  <input type="text" placeholder="Search title, author, description">
                  <span><i class="fas fa-search"></i></span>
              </div>
          </div>
          <div class="-grid main-blog">
              <blog></blog>
              <blog></blog>
              <blog></blog>
              <blog></blog>
          </div>
          <div class="navigation">
              <nav class="-flex -full-width -full-height -center-x -center-y">
                  <div class="chevron-left">
                      <a href="#" class="-full-width -full-height -flex"><span><i class="fas fa-chevron-left"></i></span></a>
                  </div>
                  <div class="nav-page -flex">
                      <div class="page active">
                          <a href="#" class="-block -text-center -full-width -full-height">1</a>
                      </div>
                       <div class="page">
                          <a href="#" class="-block -text-center -full-width -full-height">2</a>
                      </div>
                       <div class="page -block -text-center">
                          ...
                      </div>
                      <div class="page">
                          <a href="#" class="-block -text-center -full-width -full-height">10</a>
                      </div>
                  </div>
                  <div class="chevron-right">
                      <a href="#" class="-full-width -full-height -flex"><span><i class="fas fa-chevron-right"></i></span></a>
                  </div>
              </nav>
          </div>
      </div>
  </div>
</template>

<script>
import Blog from './Blog.vue';

export default {
    components: {
        Blog
    }
}
</script>

<style scoped>

#list-blog {
    background: #fff;
    padding: 50px 0;
}

.main-blog {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 30px;
}

.list-blog-title {
    padding: 30px 0;
    justify-content: space-between;
}

.list-blog-title .all-blog a{
    color: #181818;
}

.list-blog-title .all-blog a:hover {
    text-decoration: underline;
}

.search {
    display: flex;
    border: 1px solid #848484b8;
    border-radius: 4px;
    align-items: center;
    width: 300px;
    justify-content: space-between;
}

.search input{
    background: none;
    outline: 0;
    padding: 0.55rem 1.5rem;
    border: none;
    flex-basis: 80%;
}

.search span  {
    display: flex;
    width: 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #ccc;
    cursor: pointer;
}

.search span:hover {
    background: #e6e4e463;
}

.navigation {
    padding: 30px 0;
}

nav .chevron-left {
    margin-right: 5px;
}

nav .chevron-right {
   
} 

.nav-page {
    padding: 0px;
}

.nav-page .page {
    width: 23px;
    height: 20px;
    margin-right: 5px;
}


.page.active {
    background: #181818;
}

.page.active a {
    color: #fff;
}

</style>