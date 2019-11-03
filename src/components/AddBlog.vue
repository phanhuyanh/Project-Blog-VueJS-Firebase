<template>
  <div class="add-blog">
    <div id="editor">
      <textarea  v-model="input" placeholder="you can write markdown"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
    <div class="post-blog -flex -center-x">
        <button class="btn btn-primary" @click="postBlog()">Post Blog</button>
    </div>
  </div>
</template>

<script src="./add_blog.js"></script>

<style scoped>
.add-blog {
    background: #fff;
    height: 700px;
}

#editor {
    height: 100%;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #a2a2a24a;
  resize: none;
  outline: none;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

.add-blog p code {
  color: #f66;
}

.post-blog {
    margin-top: 15px;
    justify-content: flex-end;
}
</style>