import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "./components/MainLayout.vue";
import AllBlog from "./components/AllBlog.vue";
import DashBoard from "./components/DashBoard.vue";
import ManageBlog from "./components/ManageBlog.vue";
import Analist from "./components/Analist.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import UserInformation from "./components/UserInformation.vue";
import MyBlog from "./components/MyBlog.vue";
import MyProfile from "./components/MyProfile.vue";
import AddBlog from "./components/AddBlog.vue";
import Topic from "./components/Topic.vue";
import Account from "./components/Account.vue";
import AccBasic from "./components/AccBasic.vue";
import AllVideo from "./components/AllVideo.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "",
      component: MainLayout
    },
    {
      path: "/home",
      name: "home",
      component: MainLayout
    },
    {
      path: "/blog/page/:id",
      name: "blog",
      component: AllBlog
    },
    {
      path: "/dashboard",
      component: DashBoard,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: "",
          name: "dashboard",
          component: Analist
        },
        {
          path: "blog",
          name: "manage-blog",
          component: ManageBlog
        }
      ]
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn
    },
    {
      path: "/user-information",
      component: UserInformation,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: "",
          name: "user-information",
          component: MyProfile
        },
        {
          path: "my-blog",
          name: "my-blog",
          component: MyBlog
        },
        {
          path: "add-blog",
          name: "add-blog",
          component: AddBlog
        }
      ]
    },
    {
      path: "/topic/:id",
      name: "topic",
      component: Topic
    },
    {
      path: "/account",
      component: Account,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: "basic",
          name: "basic",
          component: AccBasic
        }
      ]
    },
    {
      path: "/all-video",
      name: 'all-video',
      component: AllVideo
    },
  ],
  mode: "history"
});
