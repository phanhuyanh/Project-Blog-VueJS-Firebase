<template>
  <div id="list-blog">
      <div class="container">
          <div class="list-blog-title -flex">
              <div class="all-blog"><a href="#">All Blog</a></div>
              <search></search>
          </div>
          <div class="-grid main-blog">
              <blog></blog>
              <blog></blog>
              <blog></blog>
              <blog></blog>
          </div>
          <pagination></pagination>
      </div>
  </div>
</template>

<script>
import Blog from './Blog.vue';
import Search from './Search.vue';
import Pagination from './Pagination.vue';

export default {
    components: {
        Blog,
        Search,
        Pagination
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




</style>