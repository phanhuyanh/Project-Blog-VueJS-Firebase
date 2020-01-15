<template>
  <div class="date target-item">
      <div class="target-main">
          <div class="target-main-head">
              Ngay
          </div>
          <div class="target-main-content">
              Chien dich chay tu 
              <strong>{{ parseDate(scheduler.start_time) }} - {{ parseDate(scheduler.end_time) }}</strong>
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
    created() {
        this.parseDate(this.scheduler.start_time);
        this.parseDate(this.scheduler.end_time);
    },
    methods: {
        parseDate(timestamp) {

            var date = new Date(timestamp);

            var yyyy = date.getFullYear();
            var mm = date.getMonth() + 1;
            var dd = date.getDay();

            return `${dd}/${mm}/${yyyy}`;
        }
    }
}
</script>

<style>

</style>