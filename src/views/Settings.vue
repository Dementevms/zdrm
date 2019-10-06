<template>
  <div class="view-settings">
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
          <div class="working-hours__item">
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
          <div class="working-hours__item">
            <div class="working-hours__col-left">
              <div class="input-checkbox">
                <div class="input-checkbox__switch"></div>
                <div class="input-checkbox__label">Monday</div>
              </div>
            </div>
            <div class="working-hours__col-right">
              <div class="time-controls">
                <div class="time-controls__start">08:00</div>
                <div class="time-controls__spacer"></div>
                <div class="time-controls__end">17:00</div>
              </div>
              <div class="input-slider js-slider">
                <div class="input-slider__value"></div>
                <div class="input-slider__control-left js-slider-control"></div>
                <div class="input-slider__control-right js-slider-control"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="settings-box__footer"></div>
    </div>
  </div>
</template>

<script>
import Slider from '@/modules/slider';
export default {
  mounted(){
    const slider = new Slider();
  }
}
</script>

<style lang="scss">
.time-controls {
  display: flex;
  align-items: center;

  &__start,
  &__end {
    display: block;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid var(--gray-color);
    padding: 0 8px;
    font-size: 13px;
    line-height: 20px;
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

  &__value {
    background-color: var(--sanguina-color);
    height: 8px;
    width: 50%;
  }

  &__control-left,
  &__control-right {
    background: var(--white-color);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
    border-radius: 100%;
    height: 20px;
    width: 20px;
    position: absolute;
    top: 0;
  }
}

.input-checkbox {
  display: flex;
  align-items: center;

  &__switch {
    box-sizing: border-box;
    border-radius: 4px;
    background-color: var(--lime-color);
    width: 18px;
    height: 18px;
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
  &__item {
    display: flex;
    align-items: center;
  }

  &__col-left {
    width: 200px;
  }

  &__col-right {
    width: calc(100% - 200px);
  }

  &__label {
    font-size: 15px;
    line-height: 22px;
    color: var(--gray-color);
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
}
</style>
