import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: () =>
        import(/* webpackChunkName: "team" */ "./views/Dashboard.vue")
    },
    {
      name: "Customers",
      path: "/customers",
      component: () =>
        import(/* webpackChunkName: "customers" */ "./views/Customers.vue")
    },
    {
      name: "Calendar",
      path: "/calendar",
      component: () =>
        import(/* webpackChunkName: "calendar" */ "./views/Calendar.vue")
    },
    {
      name: "Chats",
      path: "/chats",
      component: () =>
        import(/* webpackChunkName: "chats" */ "./views/Chats.vue")
    },
    {
      name: "Tasks",
      path: "/tasks",
      component: () =>
        import(/* webpackChunkName: "team" */ "./views/Tasks.vue")
    },
    {
      name: "Inbox",
      path: "/inbox",
      component: () =>
        import(/* webpackChunkName: "inbox" */ "./views/Inbox.vue")
    },
    {
      name: "Calls",
      path: "/calls",
      component: () =>
        import(/* webpackChunkName: "calls" */ "./views/Calls.vue")
    },
    {
      name: "Leads",
      path: "/leads",
      component: () =>
        import(/* webpackChunkName: "leads" */ "./views/Leads.vue")
    },
    {
      name: "Team",
      path: "/team",
      component: () => import(/* webpackChunkName: "team" */ "./views/Team.vue")
    },
    {
      path: "/settings",
      name: "settings",
      component: () =>
        import(/* webpackChunkName: "settings" */ "./views/Settings.vue")
    }
  ]
});
