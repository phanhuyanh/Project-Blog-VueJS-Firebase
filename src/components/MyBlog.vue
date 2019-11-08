<template>
  <div class="my-blog">
    <div class="my-blog-head -flex">
      <search></search>
    </div>
    <div class="my-blog-main -grid">
      <blog-item v-for="item in listBlog" :key="item.id"
      :title="item.title"
      :description="item.description"
      :timestamp="item.timestamp"
      :id="item.id"></blog-item>
    </div>
    <div class="pag">
      <pagination></pagination>
    </div>
  </div>
</template>

<script src="./my_blog.js"></script>

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


</style>