<template>
  <div id="contact">
      <div class="container">
          <div class="main-contact -grid">
              <div class="contact-title -flex">
                  <h1>Contact</h1>
                  <p class="address">Đông Lao - Đông La - Hoài Đức - Hà Nội</p>
                  <p class="email">phanhuyanh251@gmail.com</p>
                  <p class="phone">0776424268</p>
                  <div class="other -grid">
                      <div class="facebook"><a href="#" class="-block -full-width -full-height"><span><i class="fab fa-facebook-square"></i></span></a></div>
                      <div class="github"><a href="#" class="-block -full-width -full-height"><span><i class="fab fa-github"></i></span></a></div>
                      <div class="signal"><a href="#" class="-block -full-width -full-height"><span><i class="fas fa-signal"></i></span></a></div>
                  </div>
              </div>
              <div class="img-contact">
                  <img src="../../public/img/Dev_NodeJS_by_step.jpg" 
                  alt="" class="-full-width -full-height">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#contact {
    background: #181818;
    padding: 50px 0;
}

.main-contact {
    grid-template-columns: 50% 50%;
    background: #1d1d1d;
}

.contact-title {
    color: #fff;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-flow: column wrap;
}

.contact-title h1 {
    margin-bottom: 15px;
}

.address, .email, .phone {
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.other {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
}

.other a {
    color: #fff;
}

.other a span {
    display: block;
    width: 100%;
    height: 100%;
}

.other a span i {
    font-size: 1.2rem;
}

.facebook i:hover{
    color: #00a0ec; 
}

.github i:hover{
    color: #ff05d5;
}

.signal i:hover {
    color: #007eff;
}

.img-contact img{
    background-position: center center;
    background-size: cover;
}
</style>