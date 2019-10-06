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

</style>
