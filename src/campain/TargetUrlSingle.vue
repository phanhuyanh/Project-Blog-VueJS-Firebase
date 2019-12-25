<template>
  <div class="target-url-single -layout-h -full-width">
    <div class="target-url-filter -layout-h -center -flex">
        <div class="target-url-site">phanhuyanh.github.io/</div>
        <input type="text" class="target-url-input" :value="strExp" @keyup="updateUrlExp">
        <div class="target-url-edit" @click="showModalTargetUrl(strExp)">
            Edit
        </div>
    </div>
    <div class="target-url-del-btn -layout-h -center -justify-center" @click="delUrlExp">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12 16" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
            <path d="M8.919 14.946c-.002.028-.033.055-.049.055H3.13c-.017 0-.048-.027-.05-.06L2.02 3.492h7.96L8.919 14.946zM4.625 1.131c0-.082.061-.148.137-.148h2.476c.076 0 .137.066.137.148v1.362h-2.75V1.13zm6.914 1.362H8.297V1.13C8.297.498 7.82 0 7.238 0H4.762c-.584 0-1.059.498-1.059 1.131v1.362H.461c-.255 0-.461.222-.461.499 0 .275.206.5.46.5h.635l1.068 11.543c.044.541.469.965.967.965h5.74c.498 0 .922-.424.966-.959l1.07-11.55h.633c.255 0 .461-.224.461-.499 0-.277-.206-.5-.46-.5z"></path>
        </svg>
    </div>  
  </div>
</template>

<script>
export default {
    props: {
        strExp: String,
        label: String,
        identify: Number
    },
    methods: {
        updateUrlExp(e) {
            this.$emit('updateUrlExp', e.target.value);
        },
        delUrlExp() {
            this.$emit('delUrlExp');
        },
        showModalTargetUrl(strExp) {
            this.$root.$emit('showModalTargetUrl', [strExp, this.label, this.identify])
        }
    }
}
</script>

<style scoped>
.target-url-single {
    margin-bottom: 10px;
}

.target-url-filter {
    border: 1px solid var(--bd-color-group);
    border-radius: 4px;
    padding-left: 13px;
    padding-right: 16px;
}

.target-url-filter:hover {
    border-color: var(--bd-color-hover);
}

.target-url-site {
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #8b96a8;
}

.target-url-input {
    border: none;
    background: none;
    outline: 0;
    padding: 9px 8px;
    color: var(--bg-campain-header);
    height: 100%;
    flex: 1;
    font-size: 14px;
}

</style>