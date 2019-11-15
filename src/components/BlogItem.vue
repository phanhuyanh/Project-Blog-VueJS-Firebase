<template>
  <!-- Blog -->
      <div class="blog-item">
        <router-link  :to="{ name: 'topic', params: { id: id }}" class="-block -full-width -full-height">
          <div class="title">{{ title }}</div>
          <div class="description">{{ description }}</div>
          <div class="creat-at">{{dateFormat(timestamp) }}</div>
        </router-link>
      </div>
    <!-- Blog -->
</template>

<script>
export default {
    props: {
        id: String,
        title: String,
        description: String,
        timestamp: Number
    },
    methods: {
      dateFormat(timestamp) {
        var date = new Date(timestamp);

        return `${date.getDate()}/${date.getMonth()  + 1}/${date.getFullYear()}`
      }
    }

}
</script>

<style scoped>
.blog-item {
  transition: .5s all ease;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
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
  transition: .5s all ease;
  box-shadow: 0 4px 12px #ccc;
}
</style>