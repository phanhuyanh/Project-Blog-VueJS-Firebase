<template>
  <div class="topic">
    <zoom-img class="-hidden -none"></zoom-img>
    <div class="container">
      <header-layout></header-layout>
      <div class="topic-content">
        <div class="title-topic">
          {{ topic.title }}
        </div>
        <div class="main-topic">
          <div v-html="compiledMarkdown" class="preview overflow-y-auto"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./topic.js"></script>

<style scoped>
.topic-content {
  padding: 150px 0;
}

.topic-content .title-topic {
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  font-size: 1.4rem;
}

.main-topic {
  margin-top: 30px;
}

.main-topic a {
  color: #2b2bff !important;
}

.preview {
  line-height: 45px;
  background: #fff;
}

</style>
