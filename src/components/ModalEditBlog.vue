<template>
  <div class="modal modal-edit-blog" v-if="isShowModal">
    <loader v-if="isUpdating"></loader>
    <template v-else>
      <div class="edit-blog-head">
        <ul class="-flex">
          <li
            title="edit"
            class="cursor-pointer"
            @click="isPreview = false"
            :class="{ active: !isPreview }"
          >
            Edit
          </li>
          <li
            title="preview"
            class="cursor-pointer"
            @click="isPreview = true"
            :class="{ active: isPreview }"
          >
            Preview
          </li>
          <li title="delete" class="cursor-pointer">
            <span @click="$emit('closeShowModal')">
              <i class="fas fa-times"></i>
            </span>
          </li>
        </ul>
      </div>
      <div class="edit-content">
        <div
          class="preview overflow-x-auto"
          v-if="isPreview"
          v-html="compiledMarkdown"
        ></div>
        <template v-else>
          <div class="title form-group">
            <label for>Title:</label>
            <input type="text" class="form-control" v-model="dataProps.title" />
          </div>
          <div id="editor">
            <textarea
              placeholder="you can write markdown"
              v-if="!isPreview"
              v-model="dataProps.description"
            ></textarea>
          </div>
        </template>
        <div class="post-blog -flex -center-x">
          <button class="btn btn-primary" @click="updateBlog()">
            Update Blog
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script src="./modal_edit_blog.js"></script>

<style scoped>
.modal-edit-blog {
  top: 20%;
  bottom: 20%;
  left: 20%;
  right: 20%;
  background: #fff;
  z-index: 2;
  border-radius: 5px;
  padding: 15px 0;
}

.edit-blog-head {
  padding: 0 15px;
}

.edit-blog-head ul {
  justify-content: flex-start;
  margin-bottom: 15px;
}

.edit-blog-head ul li:last-child {
  margin-left: auto;
}

.edit-blog-head ul li {
  padding: 10px 15px;
}

.edit-blog-head ul li.active {
  background: red;
  color: #fff;
  border-radius: 5px;
}

.edit-content {
  height: 100%;
}

#editor {
  height: 65%;
  padding: 0 15px;
  margin-bottom: 5px;
}

textarea {
  width: 100%;
  height: 100%;
  outline: 0;
  border-color: #ccc;
  border-radius: 5px;
  padding: 5px;
  line-height: 25px;
}

.preview {
  padding: 0 30px;
  height: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
  line-height: 30px;
  margin-bottom: 5px;
}
</style>
