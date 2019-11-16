<template>
  <div id="about">
    <div class="container">
      <div class="-grid">
        <div class="about-me -flex">
            <h1>This is Website for anyone discuss problem</h1>
            <p>See more topic is discussing</p>
            <router-link to="blog/page/1" class="btn btn-dark">See Blog</router-link>
        </div>
        <div class="bgMedia">
            <img src="https://static.wixstatic.com/media/44a8b5374d1c4364a684efdb64db7728.jpg/v1/fill/w_872,h_780,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/44a8b5374d1c4364a684efdb64db7728.webp" 
            alt="" class="-full-width -full-height">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#about {
    background: #181818;
    padding: 150px 0 50px 0;
}

.-grid {
    grid-template-columns: 50% 50%;
}

.about-me {
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #1d1d1d;
}

.about-me h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.about-me p {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.bgMedia {
    
}

.bgMedia img {
    background-position: center center;
    background-size: cover;
}
</style>