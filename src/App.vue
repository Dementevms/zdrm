<template>
  <div id="app" class="app them_base">
    <div class="app__aside">
      <Aside/>
    </div>
    <div class="app__content">
      <router-view />
    </div>
  </div>
</template>
<script>
import Aside from '@/components/Aside.vue';
export default {
  components: {
    Aside
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Heebo", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.them{
  &_base{
    --lime-color: #4ECE3D;
    --royal-blue-color: #4A90E2;
    --dark-color: #4A4A4A;
    --gray-color: #9B9B9B;
    --light-gray-color: #E0E0E0;
    --white-color: #FFFFFF;
    --dirty-white-color: #F2F2F2;
    --red-color: #E8191F;
    --light-red-color: #DC3F43;
    --sanguina-color: #97040C;

    --shadow-base: rgba(0, 0, 0, 0.5);
  }
}

.app{
  display: flex;
  background: var(--dirty-white-color);

  &__aside{
    width: 200px;
  }

  &__content{
    box-sizing: border-box;
    padding: 24px 54px 38px 100px;
    width: calc(100% - 200px);
  }
}
.gag{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.btn{
  display: block;
  cursor: pointer;
  background: #21D366;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 6px 12px 4px;

  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  text-transform: uppercase;
  color: var(--white-color);
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
    border: 1px solid var(--lime-color);
    background-color: var(--lime-color);
    width: 18px;
    height: 18px;

    svg{
      fill: var(--white-color);
      width: 8px;
      height: 6px;
    }

    &.disabled{
      background: none;
      border: 1px solid var(--gray-color);
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

</style>
