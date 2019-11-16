<template>
  <div class="blog">
    <div class="card">
      <div class="img-topic">
        <img
          src="https://static.wixstatic.com/media/6a09dadbfe8e4b2c844d14f0df73cb86.jpg/v1/fit/w_290,h_194,al_c,q_80/file.png"
          alt
          class="-full-height -full-width"
        />
      </div>
      -->
      <div class="content-topic">
        <div class="head-topic">
          <avatar></avatar>
          <div class="title">
            <p>Phan Huy Anh</p>
            <p class="time-post">11 hours ago</p>
          </div>
          <div class="option-topic" title="click để hiển thị tùy chọn">
            <span class="option-ellipsis" @click="showOption = !showOption">
              <i class="fas fa-ellipsis-v"></i>
            </span>
            <div class="list-option" v-if="showOption">
              <ul>
                <li>
                  <a href="#"><span><i class="fas fa-heart"></i></span> Follow Post</a>
                </li>
                <li>
                  <a href="#"><span><i class="fas fa-thumbs-down"></i></span> Unfllow Post</a>
                </li>
                <li>
                  <a href="#"><span><i class="fas fa-edit"></i></span> Edit Post</a>
                </li>
                <li>
                  <a href="#"><span><i class="fas fa-share"></i></span> Share Post</a>
                </li>
                <li>
                  <a href="#"><span><i class="fas fa-trash-alt"></i></span> Delete Post</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="title-topic">
            <a href="#" class="-full-width -full-height -block">LifeCycle Hook In VueJS</a>
        </div>
        <div class="blog-status">
          <div class="list-status -flex">
            <div class="seen">
              <span>
                <i class="far fa-eye"></i>
                0
              </span>
            </div>
            <div class="follow">
              <span>
                <i class="fas fa-heart"></i>
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  components: {
    Avatar
  },
  data: () => ({
      showOption: false
  })
};
</script>

<style scoped>
.blog {
    border: 1px solid #ccc;
    box-shadow: 0 4px 12px #ccc;
    transition: .3s;
    cursor: pointer;
}

.blog:hover {
    transform: translateY(-15px);
    transition: .3s;
}

.img-topic {
  width: 100%;
  height: 166px;
   
}

.img-topic img {
  background-position: center center;
  background-size: cover;
}

.content-topic {
  padding: 15px;
}

.head-topic {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.head-topic .title {
    flex-grow: 2;
    margin-left: 15px;
    color: #424242;
}

.head-topic .option-topic {
    cursor: pointer;
    position: relative;
}

.head-topic .option-topic .list-option {
    position: absolute;
    right: 0;
    top: 100%;
    width: 200px;
    background: #fff;
    border: 1px solid #cccccc5e;
    
}

.head-topic .option-topic .list-option ul {
    list-style-type: none;
}

.head-topic .option-topic .list-option ul li {
    padding: 10px 15px;
    border-bottom: 1px solid #cccccc87;
}

.head-topic .option-topic .list-option ul li:hover {
    background: #dedede;
}

.head-topic .option-topic .list-option ul li a {
    color: #181818;
}


.head-topic .option-topic .list-option ul li a span i {
    color: #181818;
}

.title-topic {
    height: 70px;
    margin-bottom: 15px;
    font-size: 1.1rem;
    font-weight: bold;
}

.title-topic a {
    color: #181818;
}

.list-status {
    align-items: center;
}

.list-status .seen{
    margin-right: 30px;
}

</style>