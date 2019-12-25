<template>
  <div class="target-url-row -layout-h">
      <div class="target-url-label">
          <p>{{ label }}</p>
      </div>
      <div class="target-url-group -full-width -layout-v -justify-center">
          <target-url-single v-for="(urlExp, idx) in listUrlExp" :key="idx" :strExp="urlExp"
          :label="label" :identify="idx"
          @updateUrlExp="val => updateUrlExp(val, idx)"
          @delUrlExp="delUrlExp(idx)"></target-url-single>
          <a class="target-add-button" @click="addUrlExp()">
              + Add expression
          </a>
      </div>
  </div>
</template>

<script>
import TargetUrlSingle from './TargetUrlSingle.vue';
export default {
    components: {
        TargetUrlSingle
    },
    props: {
        label: String
    },
    created() {
        this.$root.$on('updateUrlExp', ([urlExp, label, identify]) => {
            if(this.label != label) return;

            this.$set(this.listUrlExp, identify, urlExp);
        })
    },
    data() {
        return {
            listUrlExp: []
        }
    },
    methods: {
        addUrlExp() {
            this.listUrlExp.push('');
        },
        updateUrlExp(url, index) {
            this.$set(this.listUrlExp, index, url);
        },
        delUrlExp(index) {
            this.listUrlExp = this.listUrlExp.filter((_,i) => index !== i);
        }
    }
}
</script>

<style scoped>
.target-url-row {
    margin-bottom: 22px;
}

.target-url-label {
    margin-right: 23px;
}

.target-url-label p {
    width: 93px;
    height: 40px;
    position: relative;
    border: 1px solid var(--bd-color-group);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #fff;
    font-weight: 400;
    border-right-width: 0;
}

.target-url-label p:before {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    left: 100%;
    height: 1px;
    margin: 0 0 0 -14px;
    width: 20px;
    background: var(--bd-color-group);
    transform: rotate(70deg);
    transform-origin: bottom right;
}

.target-url-label p::after {
    content: "";
    display: block;
    width: 20px;
    height: 1px;
    margin: 0 0 0 -14px;
    position: absolute;
    top: 50%;
    left: 100%;
    background-color: #dfe5ed;
    transform-origin: bottom right;
    transform: rotate(-70deg);
}

</style>