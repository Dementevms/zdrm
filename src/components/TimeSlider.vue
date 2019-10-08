<template>
  <div class="time-slider" v-on:set-state-slider="onMy">
    <!-- <div class="time-slider__time-controls time-controls">
      <input class="time-controls__start" v-bind:value="startTime" @change="change" type="text">
      <div class="time-controls__spacer"></div>
      <input class="time-controls__start" v-bind:value="endTime" @change="change" type="text">
    </div> -->
    <InputSlider ref="slider" v-bind:value-control-a="valueControlA" v-bind:value-control-b="valueControlB" />
  </div>
</template>

<script>
import InputSlider from "@/components/InputSlider.vue";
export default {
  name: "TimeSlider",
  props: {
    start: Number,
    end: Number
  },
  components: {
    InputSlider
  },
  data() {
    return {
      slider: null,
      valueControlA: null,
      valueControlB: null,
      startHours: null,
      startMinuts: null
    };
  },
  created(){
    this.init();
  },
  computed: {
    // startTime(){
    //   const value = this.$store.state.inputSlider.valueControlA;
    //   return this.getTime(value);
    // },
    // endTime(){
    //   const value = this.$store.state.inputSlider.valueControlB;
    //   return this.getTime(value);
    // }
  },
  methods: {
    onMy(e){
      console.log('onMy', e);
    },
    init(){
      this.slider = this.$refs.slider;
      this.valueControlA = this.converValuesToPersent(this.start, 1440);
      this.valueControlB = this.converValuesToPersent(this.end, 1440);
      console.log('this', this);
    },
    change(e){
      const minuts = this.converTimeStringToMinuts(e.target.value);
      const persents = this.converValuesToPersent(minuts, 1440);
      this.$store.dispatch('inputSlider/setControlAValue', persents);
    },
    getTime(value) {
      const minuts = this.converPersentToValues(value, 1440)      
      let h = parseInt(minuts / 60);
      let m = parseInt(60 / (100 / ((minuts / 60 - h) * 100)));
      if(h < 10){
        h = `0${h}`;
      }
      if(m < 10){
        m = `0${m}`;
      }
      return `${h}:${m}`;
    },
    converValuesToPersent(value, maxValue){
      return (100 / (maxValue / value));
    },
    converPersentToValues(persents, maxValue){
      return parseInt(maxValue * (persents / 100));
    },
    converTimeStringToMinuts(str){
      const array = str.split(':');
      const h = parseInt(array[0]);
      const m = parseInt(array[1]);
      return h*60 + m;
    }
  }
};
</script>

<style lang="scss">
.time-slider{
  &__time-controls{
    position: absolute;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
  }
}

</style>