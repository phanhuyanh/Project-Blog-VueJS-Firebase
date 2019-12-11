import Avatar from "./Avatar.vue";
import Chart from "chart.js";
import store from "@/api/store";
import firebase from "firebase";
import Loader from "./Loader.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Avatar,
    Loader
  },
  data: () => ({
    isShowPreview: false,
    showModal: false,
    isLoadUpload: false,
    isChooseImg: false
  }),
  computed: {
    ...mapGetters({me: "getMe"})
  },
  mounted() {
    document.onkeydown = function(e) {
      if (e.keyCode != 27) return;

      this.showModal = false;
    };

    var ctx = document.getElementById("myChart");

    new Chart(ctx || [], {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  },
  methods: {
    showPreview(event) {
      this.isChooseImg = true;

      var reader = new FileReader();
      reader.onload = function() {
        var dataURL = reader.result;
        var output = document.getElementById("img-preview");
        output.src = dataURL;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.isShowPreview = true;
    },
    async uploadAvatar() {
      this.isLoadUpload = true;

      var file = document.getElementById("file");

      var storageRef = firebase
        .storage()
        .ref("Avatar-Profile/" + this.$store.state.me.id + "/" + file.files[0].name);

      await storageRef
        .put(file.files[0])
        .then(async () => {
          var url = await firebase
            .storage()
            .ref("Avatar-Profile/" + this.$store.state.me.id + "/" + file.files[0].name)
            .getDownloadURL()
            .then(url => url);

          store.updateUser(this.$store.state.me.id, { photoURL: url });

          this.$store.commit('updateMeAttr', {photoURL: url})
          alert("upload success");
          this.reset();
        })
        .catch(err => {
          console.log("err", err);
          alert("upload fail");
        });
      this.isLoadUpload = false;
    },
    reset() {
      this.isChooseImg = false;
      this.isShowPreview = false;
      this.showModal = false;
    }
  }
};
