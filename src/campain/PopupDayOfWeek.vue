<template>
  <div class="popup-scheduler day-of-week target-item">
      <div class="target-main">
          <div class="target-main-head">
              Ngay trong tuan
          </div>
          <div class="target-main-content">
              Chien dich chay vao 
              <strong>{{ parseDay(daysOfWeek.days_of_week) }}</strong>
          </div>
      </div>
      <div class="target-operation">
        <div class="target-add" v-if="(daysOfWeek.days_of_week || []).length == 0" @click="$emit('editScheduler')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="target-edit" v-else @click="$emit('editScheduler')">
            chinh sua
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        daysOfWeek: Object
    },
    methods: {
        parseDay(list) {
            var day = ['Mon', 'Tue', 'Wed', 'Thi', 'Fri', 'Sat', 'Sun'];

            return list.map(e => day[e]).join`,`
        }
    }
}
</script>

<style>

</style>