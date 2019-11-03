<template>
  <div id="my-profile" class="-grid">
      <div class="my-profile-info">
          <div class="-invidual -flex -center-x -center-y -flex-direction-col">
            <avatar p_width="100" p_height="100"></avatar>
            <h3>Display Name</h3>
          </div>
          <p class="text-overflow mar-b-15"><span class="-inl-block mar-r-5"><i class="fas fa-envelope"></i></span> phanhuyanh251@gmail.com</p>
          <p class="text-overflow mar-b-15"><span class="-inl-block mar-r-5"><i class="fas fa-phone-alt"></i></span> 0776424268</p>
          <div class="text-overflow mar-b-15"><span class="-inl-block mar-r-5"><i class="fab fa-github-square"></i></span><a href="https://github.com/phanhuyanh">https://github.com/phanhuyanh</a></div>
          <div class="text-overflow mar-b-15"><span class="-inl-block mar-r-5"><i class="fab fa-linkedin"></i></span><a href="https://www.linkedin.com/in/profile">https://www.linkedin.com/in/profile</a></div>
      </div>
      <div class="exp -grid">
          <div class="languages">
              <div class="title -title">
                  LANGUAGES
              </div>
              <div class="list-languages -list">
                  <ul>
                      <li><span class="mar-r-5"><i class="fab fa-js-square"></i></span> JavaScript</li>
                      <li><span class="mar-r-5"><i class="fab fa-php"></i></span> PHP</li>
                      <li><span class="mar-r-5"><i class="fab fa-html5"></i></span> HTML5</li>
                      <li><span class="mar-r-5"><i class="fab fa-vuejs"></i></span> VueJS</li>
                  </ul>
              </div>
          </div>
          <div class="tools">
              <div class="title -title">TOOLS</div>
              <div class="list-tools -list">
                  <ul>
                      <li><span class="mar-r-5"><i class="fab fa-bootstrap"></i></span> Bootstrap</li>
                      <li><span class="mar-r-5"><i class="fab fa-git-alt"></i></span> Git</li>
                      <li><span class="mar-r-5"><i class="fab fa-node"></i></span> NodeJS</li>
                      <li><span class="mar-r-5"><i class="fab fa-vuejs"></i></span> VueJS</li>
                  </ul>
              </div>
          </div>
          <div class="analist">
              <canvas width="400px" height="200px" id="myChart"></canvas>
          </div>
      </div>
  </div>
</template>

<script src="./my_profile.js"></script>

<style scoped>
#my-profile {
    grid-template-columns: 35% 65%;
    grid-column-gap: 15px;
}

.my-profile-info {
    background: #fff;
    padding: 15px;
}

.my-profile-info h3 {
    text-align: center;
    margin: 15px;
}

.my-profile-info a {
    color: #548eff;
}

.exp {
    grid-row-gap: 15px;
}

.exp .languages, .tools {
    background: #fff;
    padding: 0 15px;
}

.exp .-title {
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
}


.exp .-list {
    padding: 15px 0;
}

.exp .-list ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-column-gap: 15px;
}

.exp .-list ul li {
    padding: 10px 20px;
    background: #d4d4d46e;
    border-radius: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>