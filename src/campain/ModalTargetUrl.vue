<template>
  <div class="modal-windown" v-if="showModal" :class="{fade: showModal}">
    <div class="modal">
        <div class="modal-content" :class="{fade: showModal}">
            <div class="modal-target-url">
                <div class="modal-target-url-head">Include</div>
                <div class="modal-target-url-path">phanhuyanh.github.io{{ urlExp }}</div>
                <div class="modal-target-url-row">
                    <label class="modal-target-url-label">Path</label>
                    <input type="text" class="modal-target-form" v-model="path">
                    <div class="mess-invaid" v-show="invaildPath">The path contains an invalid character (’?’ or '#')</div>
                </div>
                <div class="modal-target-url-row">
                    <label class="modal-target-url-label">Query</label>
                    <div class="modal-target-query">
                        <div class="modal-target-query-row -layout-h" v-for="([key, value], idx) in query" :key="idx">
                            <div class="modal-target-query-grouop">
                                <input type="text" class="modal-target-form" :value="key"  
                                @keyup="el => updateParamKey(el.target.value, idx)">
                                <div class="mess-invaid" v-show="invaildQueryKey">Invalid characters</div>
                            </div>
                            <span>-</span>
                            <div class="modal-target-query-grouop">
                                <input type="text" class="modal-target-form" :value="value" @keyup="el => updateParamValue(el.target.value, idx)">
                                <div class="mess-invaid" v-show="invaildQueryValue">Invalid characters</div>
                            </div>
                            <div class="target-url-del-btn -layout-h -center -justify-center" @click="delParameter(idx)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12 16" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                    <path d="M8.919 14.946c-.002.028-.033.055-.049.055H3.13c-.017 0-.048-.027-.05-.06L2.02 3.492h7.96L8.919 14.946zM4.625 1.131c0-.082.061-.148.137-.148h2.476c.076 0 .137.066.137.148v1.362h-2.75V1.13zm6.914 1.362H8.297V1.13C8.297.498 7.82 0 7.238 0H4.762c-.584 0-1.059.498-1.059 1.131v1.362H.461c-.255 0-.461.222-.461.499 0 .275.206.5.46.5h.635l1.068 11.543c.044.541.469.965.967.965h5.74c.498 0 .922-.424.966-.959l1.07-11.55h.633c.255 0 .461-.224.461-.499 0-.277-.206-.5-.46-.5z"></path>
                                </svg>
                            </div> 
                        </div>
                    </div>
                    <a class="target-add-button" @click="addParameter">+ Add parameter</a>
                </div>
                <div class="modal-target-url-row">
                    <label class="modal-target-url-label">Hash</label>
                    <input type="text" class="modal-target-form" v-model="hash">
                    <div class="mess-invaid" v-show="invaildHash">The hash contains an invaild character '#'</div>
                </div>
                <div class="modal-target-url-row">
                    <div class="modal-button-group">
                        <button class="btn btn-primary" :disabled=invaild @click="saveUrlExp()">Save</button>
                        <button class="btn btn-outline-default" @click="showModal = false">Cancel</button>
                    </div>
                </div>
            </div>
            <div class="modal-close" @click="showModal = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12 12" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                    <path d="M11.332 0L6 5.332.668 0 0 .668l5.332 5.331L0 11.332.668 12 6 6.668 11.332 12l.668-.668-5.332-5.333L12 .668z"></path>
                </svg>
            </div>
        </div>
    </div>
    <div class="modal-wrap" v-show="showModal"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            query: [],
            path: '',
            hash: '',
            showModal: false,
            invaildPath: false,
            invaildHash: false,
            invaildQueryKey: false,
            invaildQueryValue: false,
            label: '',
            identify: -1
        }
    },
    created() {
        this.$root.$on('showModalTargetUrl', ([strExp, label, identify]) => {
            var url = '/' + strExp; 
            this.getPath(url);
            this.getQuery(url);
            this.getHash(url);
            this.showModal = true;
            this.label = label;
            this.identify = identify;
        })
    },
    watch: {
        path(newValue) {
            if(newValue.includes('?') || newValue.includes('#')) {
                this.invaildPath = true;
            }
            else this.invaildPath = false;
        },
        hash(newValue) {
            if(newValue.includes('#')) {
                this.invaildHash = true;
            }
            else this.invaildHash = false;
        }
    },
    methods: {
        getPath(url) {
            var idxQuestionMark = url.indexOf('?');
            var idxHashTag = url.indexOf('#');
            var pivot = url.length;

            if(idxQuestionMark != -1 && idxHashTag != -1) {
                pivot = Math.min(idxHashTag, idxQuestionMark);
            } else if(idxQuestionMark != -1) {
                pivot = idxQuestionMark;
            } else if(idxHashTag != -1) {
                pivot = idxHashTag;
            }
            this.path = url.slice(0, pivot);
        },
        getQuery(url) {
            console.log(url, 123123123)
            var idxQuestionMark = url.indexOf('?');
            var idxHashTag = url.indexOf('#');
            var pivot = url.length;
            var strQuery = '';

            if((idxHashTag != -1 && idxQuestionMark >= idxHashTag) || idxQuestionMark == -1) return;

            if(idxHashTag !== -1) {
                pivot = idxHashTag;
            }
            strQuery = url.slice(idxQuestionMark + 1, pivot);

            this.query = strQuery.split`&`.map(e => e.split`=`);
        },
        getHash(url) {
            var idxHashTag = url.indexOf('#');
            if(idxHashTag == -1) return

            this.hash = url.slice(idxHashTag + 1);
        },
        addParameter() {
            this.$set(this.query, this.query.length, []);
        },
        delParameter(index) {
            this.query = this.query.filter((_,i) => i !== index);
        },
        updateParamKey(newKey, index) {
            var [, value] = this.query[index];
            this.$set(this.query, index, [newKey, value]);
            this.invaildQueryKey = this.checkInvaildChar(newKey);
        },
        updateParamValue(newVal, index) {
            var [key] = this.query[index];
            this.$set(this.query, index, [key, newVal]);
            this.invaildQueryValue = this.checkInvaildChar(newVal);
        },
        checkInvaildChar(str) {
            return /[<>=\][@^&|\\?]/.test(str);
        },
        saveUrlExp() {
            this.$root.$emit('updateUrlExp', [this.urlExp, this.label, this.identify]);
            this.showModal = false;
        }
    },
    computed: {
        urlExp() {
            var query = this.query.filter(([key, value]) => key && value)
                                  .map(([key,value]) => `${key}=${value}`)
                                  .join`&`;
            if(query) query = '?' + query;                      
            var hash = this.hash ? '#' + this.hash : ''; 
            var path = this.path;

            if(path == '') path = '/*';
            
            return path + query + hash;   
        },
        invaild() {
            return this.invaildPath || this.invaildQueryKey || this.invaildQueryValue || this.invaildHash;
        }
    }
}
</script>

<style scoped>
.modal-target-url {
    background: #fff;    
    padding: 34px 40px;
    box-shadow: 0 11px 32px -5px rgba(54,61,77,.2);
    border-radius: 8px;
}

.modal-target-url-head {
    font-size: 24px;
    margin-bottom: 24px;
    font-weight: 600;
    line-height: 1.3;
}

.modal-target-url-path {
    background-color: #fafbfc;
    padding: 9px 14px;
    margin-top: 26px;
    margin-bottom: 18px;
    word-break: break-all;
}

.modal-target-url-row {
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
}

.modal-target-url .modal-target-url-row:last-child {
    margin-bottom: 0;
}

.modal-target-url-row label {
    display: block;
    margin-bottom: 4px;
    line-height: 1.5;
}

.modal-target-form {
    font-size: 14px;
    border: 1px solid var(--bd-color-group);
    outline: 0;
    padding: 8px 14px;
    min-height: 40px;
    line-height: 1.5;
    border-radius: 4px;
    flex: 1;
}

.modal-target-form:hover {
    border-color: var(--bd-color-hover);
}

.modal-target-query-row span {
    display: inline-flex;
    padding: 0 15px;
    justify-content: center;
    align-items: center;
    line-height: 40px;
    font-size: 30px;
    max-height: 40px;
}

.modal-target-query .modal-target-query-row {
    margin-bottom: 10px;
}

.modal-button-group button:last-child {
    margin-left: 15px;
}

</style>