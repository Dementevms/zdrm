<template>
  <div class="view-settings">
    <div class="view-settings__title">Settings</div>
    <div class="settings-box">
      <div class="settings-box__header">
        <div class="settings-box__nav">
          <div class="settings-box__nav-item">Profile</div>
          <div class="settings-box__nav-item">Notifications</div>
          <div class="settings-box__nav-item">Password</div>
          <div class="settings-box__nav-item active">Working hours</div>
          <div class="settings-box__nav-item">Call settings</div>
        </div>
      </div>
      <div class="settings-box__content">
        <div class="working-hours">
          <div class="working-hours__item working-hours__item_schedule">
            <div class="working-hours__col-left">
              <div class="working-hours__label">Schedule</div>
            </div>
            <div class="working-hours__col-right working-hours__schedule">
              <div class="working-hours__schedule-input input-radio active">
                <div class="input-radio__switch"></div>
                <div class="input-radio__label">Fixed</div>
              </div>
              <div class="working-hours__schedule-input input-radio">
                <div class="input-radio__switch"></div>
                <div class="input-radio__label">Flexible</div>
              </div>
            </div>
          </div>
          <div class="working-hours__spacer"></div>
          <WorkingHoursItem 
            v-for="(item, index) in items" 
            :key="index" 
            :title="item.title" 
            :active="item.active" 
            :start="item.start" 
            :end="item.end"
          />
        </div>
      </div>
      <div class="settings-box__footer"></div>
    </div>
  </div>
</template>

<script>
import Slider from '@/modules/slider';
// import TimeSlider from '@/components/TimeSlider.vue';
import WorkingHoursItem from '@/components/WorkingHoursItem.vue';

export default {
  components:{
    WorkingHoursItem
  },
  data(){
    return {
      items: [
        {
          title: 'Monday',
          active: true,
          start: 360,
          end: 720
        },
        {
          title: 'Tuesday',
          active: true,
          start: 60,
          end: 960
        },
        {
          title: 'Wedndesday',
          active: true,
          start: 270,
          end: 1020
        },
        {
          title: 'Thursday',
          active: true,
          start: 80,
          end: 830
        },
        {
          title: 'Friday',
          active: true,
          start: 360,
          end: 1400
        },
        {
          title: 'Saturday',
          active: false,
          start: 145,
          end: 254
        },
        {
          title: 'Sunday',
          active: false,
          start: 120,
          end: 651
        },
      ],
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

.time-controls {
  display: flex;
  align-items: center;

  &__start,
  &__end {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid var(--gray-color);
    padding: 0;
    width: 48px;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    color: var(--dark-color);
  }
  
  &__spacer {
    display: block;
    background-color: var(--dark-color);
    margin: 0 2px;
    width: 4px;
    height: 1px;
  }
}

.input-slider {
  display: block;
  background-color: var(--gray-color);
  border-radius: 4px;
  width: 100%;
  height: 8px;
  position: relative;

  &__bar {
    background-color: var(--sanguina-color);
    height: 8px;
    position: absolute;
  }

  &__control-left,
  &__control-right {
    background: var(--white-color);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
    border-radius: 100%;
    height: 20px;
    width: 20px;
    position: absolute;
    top: -8px;
    transform: translateX(-50%);
  }
}

.input-checkbox {
  display: flex;
  align-items: center;

  &__switch {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: var(--lime-color);
    width: 18px;
    height: 18px;

    svg{
      fill: var(--white-color);
      width: 8px;
      height: 6px;
    }
  }

  &__label {
    margin: 0 0 0 8px;
    font-size: 15px;
    line-height: 22px;
    color: var(--dark-color);
  }
}

.input-radio {
  $root: &;

  display: flex;
  align-items: center;

  &__switch {
    box-sizing: border-box;
    border: 1px solid var(--gray-color);
    border-radius: 100%;
    width: 18px;
    height: 18px;
    position: relative;
  }

  &__label {
    margin: 0 0 0 8px;
    font-size: 15px;
    line-height: 22px;
    color: var(--dark-color);
  }

  &.active {
    #{$root}__switch::after {
      display: block;
      content: "";
      background-color: var(--royal-blue-color);
      border-radius: 100%;
      width: 12px;
      height: 12px;
      position: absolute;
      top: 2px;
      left: 2px;
    }
  }
}

.settings-box {
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
}

.working-hours {
  overflow: hidden;

  &__item {
    display: flex;
    align-items: center;
  }

  &__col-left {
    width: 200px;
    position: relative;
  }

  &__col-right {
    width: calc(100% - 200px);
    position: relative;
  }

  &__label {
    font-size: 15px;
    line-height: 22px;
    color: var(--gray-color);
  }

  &__item{
    margin: 42px 0;
    
    &_schedule{
      margin: 26px 0 16px;
    }
  }

  &__schedule {
    display: flex;
    align-items: center;
  }

  &__schedule-input {
    margin: 0 20px 0 0;
    &:last-child {
      margin: 0;
    }
  }

  &__spacer {
    background-color: var(--light-gray-color);
    width: 100%;
    height: 1px;
  }

  &__time-controls{
    position: absolute;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
