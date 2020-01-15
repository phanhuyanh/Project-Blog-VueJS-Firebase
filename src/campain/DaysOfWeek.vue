<template>
  <div class="day-of-week target-item">
      <div class="target-main">
          <div class="target-main-head">
              Ngay trong tuan
          </div>
          <div class="target-main-content">
              Chien dich chay vao 
              <strong>{{ parseDay(scheduler.days_of_week) }}</strong>
          </div>
      </div>
      <div class="target-del">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7896 5L5.78955 15" stroke="#5F6369" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.78955 5L15.7896 15" stroke="#5F6369" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        scheduler: Object
    },
    methods: {
        parseDay(list) {
            var day = ['Mon', 'Tue', 'Wed', 'Thi', 'Fri', 'Sat', 'Sun'];

            return list.map(e => day[e]).join`,`
        }
    }
}
</script>

<style scoped>

</style>