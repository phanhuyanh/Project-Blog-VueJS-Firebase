<template>
  <div class="my-blog">
    <div class="my-blog-head -flex">
      <search></search>
    </div>
    <div class="my-blog-main -grid">
      <!-- Blog -->
      <div class="blog-item">
        <a href="#" class="-block -full-width -full-height">
          <div class="title">This is title</div>
          <div class="description">this is description</div>
          <div class="creat-at">05/11/2019</div>
        </a>
      </div>
      <!-- Blog -->
       <!-- Blog -->
      <div class="blog-item">
        <a href="#" class="-block -full-width -full-height">
          <div class="title">This is title</div>
          <div class="description">this is description</div>
          <div class="creat-at">05/11/2019</div>
        </a>
      </div>
      <!-- Blog -->
       <!-- Blog -->
      <div class="blog-item">
        <a href="#" class="-block -full-width -full-height">
          <div class="title">This is title</div>
          <div class="description">this is description</div>
          <div class="creat-at">05/11/2019</div>
        </a>
      </div>
      <!-- Blog -->
       <!-- Blog -->
      <div class="blog-item">
        <a href="#" class="-block -full-width -full-height">
          <div class="title">This is title</div>
          <div class="description">this is description</div>
          <div class="creat-at">05/11/2019</div>
        </a>
      </div>
      <!-- Blog -->
    </div>
    <div class="pag">
      <pagination></pagination>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
import Pagination from "./Pagination.vue";

export default {
  components: {
    Search,
    Pagination
  }
};
</script>

<style scoped>
.my-blog-head {
  justify-content: flex-end;
  padding-bottom: 15px;
  border-bottom: 1px solid #9b9b9b;
}

.my-blog-main {
  padding: 30px 0;
  grid-row-gap: 15px;
}

.blog-item {
  transition: .5s all ease;
  background: #fff;
  border-radius: 5px;
}

.blog-item a {
  padding: 15px;
}

.blog-item .title {
  font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;
    line-height: 28px;
}

.blog-item .description {
  margin-bottom: 5px;
  line-height: 24px;
}

.blog-item:hover {
  transform: translateY(-8px);
  transition: .5s all ease;
  box-shadow: 0 4px 12px #ccc;
}
</style>