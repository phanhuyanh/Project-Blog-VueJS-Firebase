<template>
   <div class="list-category">
          <div class="title">
              Blog-project
          </div>
          <div class="list-product">
              <ul>
                  <router-link v-for="product in list_product"
                      :key="product.key"
                      :to="product.link"
                      :class="{'router-link-active': index === product.key}"
                      @click="index = product.key"
                      class="-block -full-width -full-height"
                      exact
                      >
                      {{ product.title }}
                      <!--<router-link :to="product.link" exact>{{ product.title }}</router-link> -->
                  </router-link>
              </ul>
          </div>
      </div>
</template>

<script>
//import firebase from 'firebase';
export default {
    data: () => ({
        index:0,
        list_product: [
            {title: 'Dashboard', key: 0, link: '/dashboard'},
            {title: 'Blog', key: 1, link: '/dashboard/blog'}
        ]
    }),
    created() {
    },
    methods: {
    },

}
</script>

<style scoped>
.list-category {
    width: 20%;
    background: #23263e;
    color: #fff;
}

.list-category .title {
    font-size: 1.5rem;
    padding: 50px 30px;
    border-bottom: 1px solid #e0e0e057;
}

.list-product {
    margin-top: 30px;
}

.list-product  ul {
    list-style-type: none;
}

.list-product a {
    padding: 10px 30px;
}

.list-product ul a:hover{
    background: #393f5970;
}

.list-product ul a {
    display: block;
    color: #fff;
    font-weight: 100;
    font-size: 14px;
    width: 100%;
    height: 100%;
}

.list-product ul a.router-link-exact-active {
    background: #393f59;
}

.list-product ul a.router-link-exact-active  {
    color: #3899ec;
}


</style>