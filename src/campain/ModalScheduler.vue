<template>
  <div class="modal-windown">
      <div class="modal">
          <div class="modal-main">
              <div class="modal-scheduler">
                  <div class="modal-scheduler-close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="modal-scheduler-over" v-if="!isEdit" :class="{'hidden': isEdit}">
                    <div class="modal-scheduler-title">
                        Hen gio chien dich
                    </div>
                    <div class="target-scheduler">
                        <div class="target-scheduler-group" v-for="(item, idx) in listAllScheduler" :key="idx">
                            <popup-day-of-week :daysOfWeek="item" v-if="idx == 0" @editScheduler="editScheduler"></popup-day-of-week>
                            <popup-time-scheduler :time="item" v-if="idx == 2" @editScheduler="editScheduler"></popup-time-scheduler>
                            <popup-date :date="item" v-if="idx == 1" @editScheduler="editScheduler"></popup-date>
                        </div>
                    </div>
                  </div>
                  <template v-else>
                      <popup-edit></popup-edit>
                  </template>
              </div>
          </div>
      </div>
      <div class="modal-wrap"></div>
  </div>
</template>

<script>
import PopupDate from './PopupDate.vue';
import PopupDayOfWeek from './PopupDayOfWeek.vue';
import PopupTimeScheduler from './PopupTimeScheduler.vue';
import PopupEdit from './PopupEdit.vue';

export default {
    props: {
        schedulerConditions: Array
    },
    components: {
        PopupDate,
        PopupDayOfWeek,
        PopupTimeScheduler,
        PopupEdit
    },
    data() {
        return {
            isEdit: false,
            listAllScheduler: [
                {
                    'join': 'and',
                    'days_of_week': []
                },
                {
                    'join': 'and',
                    'start_time': 0,
                    'end_time': 0
                },
                {
                    'join': 'and',
                    'start_minute_day': 0,
                    'end_minute_day': 0,
                    'timezone_offset': ''
                }
            ]
        }
    },
    created() {
        this.MergeScheduler();
    },
    methods: {
        MergeScheduler() {
            this.listAllScheduler.map((scheduler, index) => {
                for(let [key] of Object.entries(scheduler)) {
                    //console.log(key)
                    var item = this.schedulerConditions.find(e => e[key] !== undefined);
                    if(item) {
                        this.$set(this.listAllScheduler[index], key, item[key]);
                    }
                }
            })
        },
        editScheduler() {
            this.isEdit = true;
        }
    },
    watch: {
        schedulerConditions() {
            this.MergeScheduler();
        }
    }
}
</script>

<style>

</style>