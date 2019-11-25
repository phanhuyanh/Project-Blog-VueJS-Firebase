<template>
  <div class="search">
    <input type="text" placeholder="Search title, author, description" @keyup.enter="searchBlog()" v-model="textSearch"/>
    <span @click="searchBlog()">
      <i class="fas fa-search"></i>
    </span>
  </div>
</template>

<script src="./search.js"></script>

<style scoped>
.search {
    display: flex;
    border: 1px solid #848484b8;
    border-radius: 4px;
    align-items: center;
    width: 300px;
    justify-content: space-between;
}

.search input{
    background: none;
    outline: 0;
    padding: 0.55rem 1.5rem;
    border: none;
    flex-basis: 80%;
}

.search span  {
    display: flex;
    width: 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #ccc;
    cursor: pointer;
}

.search span:hover {
    background: #e6e4e463;
}

</style>