<template>
  <div class="add-blog">
    <div id="await-post" v-if="isLoading">
      <loader />
    </div>
    <div class="title form-group">
      <label for="">Title:</label>
      <input type="text" class="form-control" v-model="title" />
    </div>
    <div id="editor">
      <textarea v-model="input" placeholder="you can write markdown"></textarea>
      <div v-html="compiledMarkdown" class="preview overflow-x-auto"></div>
    </div>
    <div class="post-blog -flex -center-x">
      <button class="btn btn-primary" @click="postBlog()">Post Blog</button>
    </div>
  </div>
</template>

<script src="./add_blog.js"></script>

<style scoped>
.add-blog {
  height: 100%;
}

.add-blog .title {
  margin-bottom: 15px;
}

#editor {
  height: 450px;
}

textarea,
#editor div {
  display: inline-block;
  width: 50%;
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
  font-family: "Monaco", courier, monospace;
  padding: 20px;
  line-height: 28px;
}

.add-blog p code {
  color: #f66;
}

.post-blog {
  margin-top: 15px;
  justify-content: flex-end;
}

.preview {
  line-height: 45px;
  background: #fff;
  word-break: break-all;
}

.preview a {
  color: #2b2bff;
}

#await-post {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
