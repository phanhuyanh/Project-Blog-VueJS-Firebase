<template>
  <div id="account">
    <header-layout></header-layout>
    <div class="account-info">
      <div class="container -flex">
        <div class="edit-profile--navigation">
          <nav>
            <ul>
              <li>
                <a href="#" class="active"
                  ><span><i class="fas fa-chevron-right"></i></span> Basic
                  Information</a
                >
              </li>
              <li>
                <a href="#"
                  ><span><i class="fas fa-chevron-right"></i></span> Programing
                  Languages</a
                >
              </li>
              <li>
                <a href="#"
                  ><span><i class="fas fa-chevron-right"></i></span> Framework
                  and Tools</a
                >
              </li>
              <li>
                <a href="#"
                  ><span><i class="fas fa-chevron-right"></i></span>
                  Analystic</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="edit-profile--body -full-width">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./account.js"></script>

<style scoped>
#account {
  background: #ececec5c;
  height: 100vh;
}

#account #header {
  position: sticky;
}

.account-info {
  margin-top: 15px;
}

@media screen and (max-width: 1300px) {
  .edit-profile--navigation {
    flex-basis: 50% !important;
  }
}

.edit-profile--navigation {
  flex-basis: 30%;
  background: #fff;
  padding: 15px;
  margin-right: 15px;
}

.edit-profile--navigation ul li {
  padding: 10px 15px;
}

.edit-profile--navigation ul li a {
  font-weight: bold;
  font-size: 1rem;
  color: rgb(130, 145, 163);
}

.edit-profile--navigation ul li a span i {
  font-size: 14px;
}

.edit-profile--navigation ul li a.active {
  color: rgb(68, 191, 163);
}

.edit-profile--body {
  background: #fff;
  padding: 15px;
}
</style>
