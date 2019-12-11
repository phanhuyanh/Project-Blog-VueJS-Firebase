<template>
  <!-- Blog -->
  <div class="blog-item">
    <router-link
      :to="{ name: 'topic', params: { id: id } }"
      class="-block -full-width -full-height"
    >
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
      <div class="creat-at">{{ dateFormat(timestamp) }}</div>
    </router-link>
    <div class="blog-option">
      <ul>
        <li title="Edit" @click="showModalEdit()">
          <span>
            <i class="fas fa-edit"></i>
          </span>
        </li>
        <li title="Delete" @click="deleteBlog()">
          <span>
            <i class="fas fa-minus-circle"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <!-- Blog -->
</template>

<script src="./blog_item.js"></script>

<style scoped>
.blog-item {
  transition: 0.5s all ease;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.blog-item:hover {
  transform: translateY(-8px);
  transition: 0.5s all ease;
  box-shadow: 0 4px 12px #ccc;
}

.blog-item:hover .blog-option {
  top: 5px;
  transition: 0.3s all ease;
  opacity: 1;
  visibility: visible;
}

.blog-option {
  position: absolute;
  top: -30px;
  right: 15px;
  z-index: 1;
  border-radius: 5px;
  background: #313233;
  transition: 0.3s all ease;
  opacity: 0;
  visibility: hidden;
}

.blog-option ul li {
  display: inline-block;
  padding: 5px;
  cursor: pointer;
}

.blog-option ul li:hover span i {
  color: #fff;
}

.blog-option ul li span i {
  color: #ccc;
  font-size: 14px;
}

.blog-option a {
  padding: 0;
}
</style>
