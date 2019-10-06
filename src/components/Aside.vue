<template>
  <div class="aside">
    <div class="aside__nav">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="aside__nav-item"
      >
        <div class="aside__nav-icon">
          <svg :class="[`aside__nav-icon_${item.icon}`]">
              <use v-bind="{'xlink:href':'#icon-aside-' + item.icon}"/>
          </svg>
        </div>
        <div class="aside__nav-text">{{ item.title }}</div>
      </div>
    </div>
    <!-- <router-link to="/">Home</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data(){
    return {
      items: [
        {
          title: 'Dashboard',
          icon:'dashboard',
          route: '/dashboard'
        },
        {
          title: 'Customers',
          icon:'customers',
          route: '/customers'
        },
        {
          title: 'Calendar',
          icon:'calendar',
          route: '/calendar'
        },
        {
          title: 'Chats',
          icon:'chats',
          route: '/chats'
        },
        {
          title: 'Tasks',
          icon:'tasks',
          route: '/tasks'
        },
        {
          title: 'Inbox',
          icon:'inbox',
          route: '/inbox'
        },
        {
          title: 'Calls',
          icon:'calls',
          route: '/calls'
        },
        {
          title: 'Leads',
          icon:'leads',
          route: '/leads'
        },
        {
          title: 'Team',
          icon:'team',
          route: '/team'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.aside{
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  background: linear-gradient(to top, var(--light-red-color), var(--red-color));
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 0 18px;
  width: 200px;
  height: 100vh;

  &__nav{
    margin: 78px 0 0;
  }

  &__nav-item{
    display: flex;
    align-items: center;
  }

  &__nav-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px 0 0;
    width: 30px;
    height: 30px;

    svg{
      fill: var(--white-color);
    }

    &_dashboard{
        width: 20px;
        height: 20px;
    }
    &_customers{
      width: 26px;
      height: 20px;
    }
    &_calendar{
      width: 22px;
      height: 23px;
    }
    &_chats{
      width: 24px;
      height: 23px;
    }
    &_tasks{
      width: 24px;
      height: 21px;
    }
    &_inbox{
      width: 22px;
      height: 22px;
    }
    &_calls{
      width: 19px;
      height: 24px;
    }
    &_leads{
      width: 20px;
      height: 20px;
    }
    &_team{
      width: 24px;
      height: 15px;
    }
  }

  &__nav-text{
    font-size: 16px;
    font-weight: 500;
    line-height: 50px;
    color: var(--white-color);
  }
}
</style>