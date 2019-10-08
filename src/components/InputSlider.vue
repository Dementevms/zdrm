<template>
  <div ref="slider" class="input-slider js-slider" @click="setTime">
    <div class="input-slider__bar js-slider-bar"></div>
    <div class="input-slider__control-left js-slider-control js-slider-control-left" data-type="left" :data-minuts="start" @click="setTime"></div>
    <div class="input-slider__control-right js-slider-control js-slider-control-right" data-type="right" :data-minuts="end" @click="setTime"></div>
  </div>
</template>
<script>
export default {
  name: 'input-slider',
  props: {
    start: Number,
    end: Number
  },
  mounted(){
    const time = {
      start: this.start,
      end: this.end
    }
    this.$store.dispatch('inputSlider/setTime', time);
  },
  methods:{
    setTime(){
      const time = this.$refs.slider.time;
      this.$store.dispatch('inputSlider/setTime', time);
    }
  }
}
</script>