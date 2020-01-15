<template>
  <div class="popup-scheduler target-item">
      <div class="target-main">
          <div class="target-main-head">
              Ngay
          </div>
          <div class="target-main-content">
              <template v-if="time.start_minute_day">
                Chien dich chay vao  <strong>{{ parseTime(time.start_minute_day) }} - {{ parseTime(time.end_minute_day) }}</strong>
              </template>
              <template v-else>
                  Chien dich chay tu ngay bat dau den ngay ket thuc
              </template>
          </div>
      </div>
      <div class="target-operation">
        <div class="target-add" v-if="time.start_minute_day == 0" @click="$emit('editScheduler')">
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
        time: Object
    },
    methods: {
        parseTime(timestamp) {
            if(timestamp == 0) return ''
            var date = new Date(timestamp);
            console.log(date, timestamp)
            var hh = date.getHours();
            var mm = date.getMinutes();
            return `${hh}:${mm}`
        }
    }
}
</script>

<style>

</style>