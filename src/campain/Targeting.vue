<template>
  <div class="target">
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
  </div>
</template>

<script>
import TargetUrl from './TargetURL.vue';
import ModalTargetUrl from './ModalTargetUrl.vue';

export default {
    components: {
        TargetUrl,
        ModalTargetUrl
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