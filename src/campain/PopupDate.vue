<template>
  <div class="popup-date">
    <div class="popup-scheduler target-item">
      <div class="target-main">
          <div class="target-main-head">
              Gio trong tuan
          </div>
          <div class="target-main-content">
              <template v-if="date.start_time">
                Chien dich chay vao  <strong>{{ parseDate(date.start_time) }} - {{ parseDate(date.end_time) }}</strong>
              </template>
              <template v-else>
                  Chien dich chay theo cung gio
              </template>
          </div>
      </div>
      <div class="target-operation">
        <div class="target-add" v-if="date.start_time == 0" @click="$emit('editScheduler')">
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
  </div>
</template>

<script>
export default {
    props: {
        date: Object
    },
    created() {
        this.parseDate(this.date.start_time);
        this.parseDate(this.date.end_time);
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