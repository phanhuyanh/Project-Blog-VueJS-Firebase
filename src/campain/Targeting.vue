<template>
  <div class="target">
      <modal-scheduler :schedulerConditions="schedulerConditions"></modal-scheduler>
      <modal-target-url></modal-target-url>
      <div class="target-group">
          <div class="target-header">
              <p>Where should this widget appear?</p>
          </div>
          <div class="target-body target-url">
            <target-url label="Include"></target-url>
            <target-url label="Exclude"></target-url>
          </div>
      </div>
      <div class="target-group">
          <div class="target-header">
              <p>Scheduler</p>
          </div>
          <div class="target-scheduler">
              <div class="target-scheduler-group" v-for="(scheduler, idx) in schedulerConditions" :key="idx">
                  <days-of-week v-if="(scheduler.days_of_week || []).length != 0" :scheduler="scheduler"></days-of-week>
                  <time-scheduler v-if="scheduler.start_minute_day" :scheduler="scheduler"></time-scheduler>
                  <date v-if="scheduler.start_time" :scheduler="scheduler"></date>
              </div>
              <div class="-layout-h -center -justify-center">
                  <a class="btn btn-orange">Them dieu kien thoi gian</a>
              </div>
          </div>
      </div>   
  </div>
</template>

<script>
import TargetUrl from './TargetURL.vue';
import ModalTargetUrl from './ModalTargetUrl.vue';
import DaysOfWeek from './DaysOfWeek.vue';
import TimeScheduler from './TimeScheduler.vue';
import Date from './Date.vue';
import ModalScheduler from './ModalScheduler.vue';

export default {
    components: {
        TargetUrl,
        ModalTargetUrl,
        DaysOfWeek,
        TimeScheduler,
        Date,
        ModalScheduler
    },
    data() {
        return {
            schedulerConditions: [
                {
                    'join': 'and',
                    'days_of_week': [2,3,4]
                },
                {
                    'join': 'and',
                    'start_time': 1577181443987,
                    'end_time': 1977189443997
                }
            ]
        }
    }
}
</script>

<style scoped>
.target-header {
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-header);
}

.target-body {
    border: 1px solid var(--bd-color-group);
    margin-top: 17px;
    padding: 23px;
    border-radius: 4px;
}

.target-body .target-url-row:last-child {
    margin-bottom: 0;
}
</style>