<template>
  <div class="time-slider">
    <div class="time-slider__time-controls time-controls">
      <div class="time-controls__start">{{ startTime }}
        <input v-model="startHours" type="text">
        <span>:</span>
        <input v-model="startMinuts" type="text">
      </div>
      <div class="time-controls__spacer"></div>
      <div class="time-controls__end">{{ endTime }}</div>
    </div>
    <InputSlider :start="start" :end="end" />
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
      // startHours: this.getStartHours,
      // startMinuts: 10,
    };
  },
  computed: {
    startHours: {
      get(){
        if (this.$store.state.inputSlider.time) {
          const value = Math.round(this.$store.state.inputSlider.time.start);
          const time = this.getTime(value);
          return time.h;
        }
        return "00";
      },
      set(v) {
        console.log('v',v);
      }
      // if (this.$store.state.inputSlider.time) {
      //   const value = Math.round(this.$store.state.inputSlider.time.start);
      //   const time = this.getTime(value);
      //   return time.h;
      // }
      // return "00";
    },

    startMinuts(){
      if (this.$store.state.inputSlider.time) {
        const value = Math.round(this.$store.state.inputSlider.time.start);
        const time = this.getTime(value);
        return time.m;
      }
      return "00";
    },

    startTime() {
      if (this.$store.state.inputSlider.time) {
        const value = Math.round(this.$store.state.inputSlider.time.start);
        const time = this.getTime(value);
        return time;
      }
      return "00 : 00";
    },
    endTime() {
      if (this.$store.state.inputSlider.time) {
        const value = Math.round(this.$store.state.inputSlider.time.end);
        const time = this.getTime(value);
        return time;
      }
      return "24 : 00";
    }
  },
  watch: {
    startHours(value){
      console.log('value', value);
    },
    startMinuts(value){

    }
  },
  methods: {
    // getTime2(type){
    //   if (this.$store.state.inputSlider.time) {
    //     const minuts = Math.round(this.$store.state.inputSlider.time.start);
    //     const minuts = Math.round(this.$store.state.inputSlider.time.start);

    //     const time = this.getTime(value);
    //     return time;
    //   }
    //   return "00";
    // }
    getStartHours(){
      const time = this.getTime();
      return time.h;
    },
    getTime(minuts) {
      let h = parseInt(minuts / 60);
      let m = parseInt(60 / (100 / ((minuts / 60 - h) * 100)));
      if(h < 10){
        h = `0${h}`;
      }
      if(m < 10){
        m = `0${m}`;
      }
      return { h, m };
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