import store from '@/api/store.js';

export default {
    data: () => ({
        me: {},
        listAttr: {},
        user: {}
    }),
    async created() {
        this.user = await store.getMyUser();

        this.me = await store.getUser(this.user.uid);

        this.me = this.me.data();

        for(let attr of Object.keys(this.me)) {
            this.listAttr[attr] = this.me[attr];
        }
    },
    methods: {
        async updateProfile() {
            var result = await store.updateUser(this.user.uid, this.me);

            if(result == 'success') {
                alert('update success')
            }
            else {
                alert('update fail')
            }

            this.listAttr = this.me;
            
        }
    },
    beforeRouteLeave (to, from, next) {
        if(Object.entries(this.me).some(([key, value]) => value != this.listAttr[key])) {
            var r = confirm('Bạn chưa lưu thay đổi, tiếp tục rời');

            if(r) next()

            else return
        }
        next()
    }
}