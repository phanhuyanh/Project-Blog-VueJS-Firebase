import firebase from 'firebase';
import myVideo from 'vue-video';

export default {
    data: function() {
        return {
            task: {},
            video: {
                sources: [{
                    src: 'https://firebasestorage.googleapis.com/v0/b/project-blog-83893.appspot.com/o/video%2Fy2mate.com%20-%20vietsub_xuat_son_hoa_chucvuong_thang_nam__rma93iCBkwA_720p.mp4?alt=media&token=3f4a5809-37a2-4bb7-8aa6-a5f43c3a3a64',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.6,
                    poster: ''
                }
            }
        }
    },
    components: {
        myVideo
    },
    created() {
        
    },
    methods: {
        UpdateTime(e) {
            console.log(e)
        },
        player() {
            var video  = document.getElementById('styled_video');
            console.log(video.played.start(0), video.played.end, video.currentTime)
        },
        Muted() {
            var video  = document.getElementById('styled_video');
            video.muted  = 'true'
        },
        FullScreen() {
            var elem = document.getElementById('styled_video');
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        },
        setVolume() {
             var video = document.getElementById('styled_video');
             video.volume = 0.2;
        },
        rateChange(e) {
            console.log(e)
        },
        volumeVideo() {
            var video = document.getElementById('styled_video');
            video.playbackRate = 1.2;
        },
        remuseVideo() {
            var video = document.getElementById('styled_video');
            // var styled_video_container = document.getElementById('styled_video_container');
            // styled_video_container.classList.add('style_it')
            video.play();
            console.log(video)
        },
        stopVideo() {
            var video = document.getElementById('styled_video');
            // var styled_video_container = document.getElementById('styled_video_container');
            // styled_video_container.classList.remove('style_it')
            video.pause();
        },
        uploadFile(e) {
            var file = e.target.files[0];
            var uploader = document.getElementById('uploader');
            //console.log(e.target.files[0])
            var storageRef = firebase.storage().ref('video/' + file.name);

            var task = storageRef.put(file);

            this.task = task;
            console.log(this.task)

            task.on('state_changed',
                function progress(snapshot) {
                    var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    uploader.value = percentage;
                    console.log(percentage);
                    switch(snapshot.state) {
                        case firebase.storage.TaskState.PAUSED:
                            console.log('Upload is pause')
                            break
                        case firebase.storage.TaskState.RUNNING:
                            console.log("Upload is running")
                            break
                    }
                },
                function error() {
                    console.log('err')
                },
                function complete() {
                    console.log('complete')   
                    task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        console.log('File available at : ', downloadURL)
                    })
                }
            )
        },
        pauseUpload() {
            if(this.task) {
                this.task.pause();
            }

        },
        remuseUpload() {
            if(this.task) {
                this.task.resume();
            }
        }
    }
}