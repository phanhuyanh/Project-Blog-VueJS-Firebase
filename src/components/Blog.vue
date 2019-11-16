<template>
  <div class="blog">
    <div class="card">
      <div class="card-title"><router-link :to="`/topic/` + blog.id">{{ blog.title }}</router-link></div>
      <div class="description">
        {{ blog.description.slice(0, 200) }}...
      </div>
      <div class="card-creator -flex">
        <div class="tags"></div>
        <div class="creator">
          <p class="creator-time">{{ blog.timestamp | timeDisplay }}</p>
          <div class="creator-profile -flex -center-y">
            <avatar :img_prop="creator.photoURL"></avatar>
            <div class="creator-name">{{ creator.displayName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import marked from 'marked';

export default {
  props: {
    blog: Object,
    creator: Object
  },
  components: {
    Avatar
  },
  filters: {
    timeDisplay: function(timestamp) {
      var date = new Date(timestamp);

      return `${date.getDate()}/${date.getMonth()  + 1}/${date.getFullYear()}`
    }
  },
  data: () => ({
      showOption: false
  }),
  created() {
  },
  methods: {
    compiledMarkdown(text) {
      return marked(text || '', { sanitize: true });
    }
  }
};
</script>

<style scoped>
.blog {
    border-bottom: 1px solid #cacaca75;
    padding: 15px 30px;
}

.card {
  font-size: .9rem;
}

.card .card-title {
  margin-bottom: 5px;
}

.card .card-title a{
  line-height: 1.3rem;
  font-size: 1.2rem;
  color: #07C;
}

.card .card-title a:hover {
  color: #249cf2;
}

.card .description {
  margin-bottom: 5px;
}

.card .card-creator{
  justify-content: flex-end;
}

.card .card-creator .creator {
  font-size: 12px;
}

.card .card-creator .creator .creator-time {
  margin-bottom: 5px;
  text-align: center;
}

.card .card-creator .creator .creator-profile {
  font-size: 11px;
}

.card .card-creator .creator .creator-profile .creator-name {
  margin-left: 5px;
}

</style>