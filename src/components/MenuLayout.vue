<template>
  <div id="menu">
     <nav>
       <ul>
         <li><router-link to="/">Home</router-link></li>
         <li><a href="#">Video</a></li>
       </ul>
     </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#menu nav ul {
  display: flex;
  list-style-type: none;
}

#menu nav ul li {
  padding: 0 15px;
}

#menu nav ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
}
</style>