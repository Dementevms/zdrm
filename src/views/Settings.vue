<template>
  <div class="view-settings">
    <div class="view-settings__title">Settings</div>
    <div class="settings-box">
      <div class="settings-box__header">
        <div class="settings-box__nav">
          <div class="settings-box__nav-item" :class="{active: component === 'Profile'}" @click="setComponent('Profile')">Profile</div>
          <div class="settings-box__nav-item" :class="{active: component === 'Notifications'}" @click="setComponent('Notifications')">Notifications</div>
          <div class="settings-box__nav-item" :class="{active: component === 'Password'}" @click="setComponent('Password')">Password</div>
          <div class="settings-box__nav-item" :class="{active: component === 'WorkingHours'}" @click="setComponent('WorkingHours')">Working hours</div>
          <div class="settings-box__nav-item" :class="{active: component === 'CallSettings'}" @click="setComponent('CallSettings')">Call settings</div>
        </div>
      </div>
      <div class="settings-box__content">
        <component v-bind:is="component"></component>
      </div>
      <div class="settings-box__footer">
        <div class="btn">SAVE CHANGES</div>
        <div class="settings-box__cancel">Cancel</div>
        <div class="settings-box__cancel-label">to reset changes</div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/profile/Profile.vue';
import Notifications from '@/components/notifications/Notifications.vue';
import Password from '@/components/password/Password.vue';
import WorkingHours from '@/components/working-hours/WorkingHours.vue';
import CallSettings from '@/components/call-settings/CallSettings.vue';
export default {
  name: 'Settings',
  components:{
    Profile,
    Notifications,
    Password,
    WorkingHours,
    CallSettings
  },
  data(){
    return {
      component: null
    }
  },
  created(){
    this.init();
  },
  methods: {
    init(){
      this.component = 'Profile';
    },
    setComponent(name){
      this.component = name;
    }
  },
}
</script>

<style lang="scss">

.view-settings{

  &__title{
    margin: 0 0 20px;
    font-weight: 300;
    font-size: 25px;
    line-height: 37px;
    color: var(--dark-color);
  }
}

.settings-box {
  overflow: hidden;
  background: var(--white-color);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.0434783);
  border-radius: 3px;
  width: 100%;

  &__nav {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--light-gray-color);
  }

  &__nav-item {
    cursor: pointer;
    padding: 14px 20px;
    margin: 0 20px;
    position: relative;
    font-size: 15px;
    line-height: 22px;
    color: var(--sanguina-color);

    &.active {
      &::after {
        display: block;
        content: "";
        background-color: var(--sanguina-color);
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -1px;
        left: 0;
      }
    }
  }

  &__content {
    padding: 0 20px;
  }

  &__footer{
    display: flex;
    align-items: center;
    background-color: var(--light-gray-color); 
    padding: 20px 18px 16px;
  }

  &__cancel{
    cursor: pointer;
    margin: 0 12px 0 14px;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    color: var(--sanguina-color); 
  }

  &__cancel-label{
    cursor: default;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: var(--dark-color);
  }
}

</style>
