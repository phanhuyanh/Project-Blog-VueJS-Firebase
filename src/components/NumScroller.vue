<template>
  <div class="num-scroll">
      <div class="container">
          <div class="-flex -center-y analytics">
            <div class="analytic-users -flex -center-x -flex-direction-col">
              <div class="analytic-title -text-center">User</div>
              <span class="analytic-num -flex -center-x -center-y">
                <div class="iCountUp">
                  <i-count-up :delay="delay" :endVal="numUsers" @ready="onReadyUser"></i-count-up>
                </div>
              </span>
            </div>
            <div class="analytic-blogs -flex -center-x -flex-direction-col">
              <div class="analytic-title -text-center">Blogs</div>
              <span class="analytic-num -flex -center-x -center-y">
                <div class="iCountUp">
                  <i-count-up :delay="delay" :endVal="numBlogs" @ready="onReadyBlog"></i-count-up>
                </div>
              </span>
            </div>
          </div>
      </div>
  </div>
</template>

<script src="./num_scroller.js"></script>

<style scoped>
.num-scroll {
  background: #fff;
  padding: 50px 0;
}

.analytics {
  justify-content: space-around;
}

span.analytic-num {
  border: 1px solid #404040;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 2rem;
}

.analytic-users, .analytic-blogs {
  margin-bottom: 15px;
  font-size: 2rem;
}

.analytic-title {
  margin-bottom: 15px;
}
</style>