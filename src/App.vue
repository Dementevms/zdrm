<template>
  <div id="app" class="app them_base">
    <div class="app__aside">
      <Aside />
    </div>
    <div class="app__content">
      <router-view />
    </div>
  </div>
</template>
<script>
import Aside from "@/components/Aside.vue";
export default {
  components: {
    Aside
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Heebo", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.them {
  &_base {
    --lime-color: #4ece3d;
    --royal-blue-color: #4a90e2;
    --dark-color: #4a4a4a;
    --gray-color: #9b9b9b;
    --light-gray-color: #e0e0e0;
    --white-color: #ffffff;
    --dirty-white-color: #f2f2f2;
    --red-color: #e8191f;
    --light-red-color: #dc3f43;
    --sanguina-color: #97040c;

    --shadow-base: rgba(0, 0, 0, 0.5);
  }
}

.app {
  display: flex;
  background: var(--dirty-white-color);

  &__aside {
    width: 200px;
  }

  &__content {
    box-sizing: border-box;
    padding: 24px 54px 38px 100px;
    width: calc(100% - 200px);
  }
}

.page {
  &__title {
    margin: 0 0 20px;
    font-weight: 300;
    font-size: 25px;
    line-height: 37px;
    color: var(--dark-color);
  }
}

.gag {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.btn {
  display: block;
  cursor: pointer;
  background: #21d366;
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
    cursor: pointer;
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

    svg {
      fill: var(--white-color);
      width: 8px;
      height: 6px;
    }

    &.disabled {
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
