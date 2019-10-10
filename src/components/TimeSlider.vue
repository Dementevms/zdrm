<template>
  <div class="time-slider">
    <div class="time-slider__controls">
      <input
        class="time-slider__input"
        v-bind:value="startTime"
        @change="changeStartTime"
        type="text"
      />
      <div class="time-slider__spacer"></div>
      <input 
        class="time-slider__input" 
        v-bind:value="endTime" 
        @change="changeEndTime" 
        type="text"
      />
    </div>
    <InputSlider
      v-bind:value-control-a="valueControlA"
      v-bind:value-control-b="valueControlB"
      @change="changeInputSlider"
    />
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
      valueStartTime: null,
      valueEndTime: null,
      valueControlA: null,
      valueControlB: null
    };
  },
  created() {
    this.init();
  },

  computed: {
    startTime() {
      return this.getTime(this.valueStartTime);
    },
    endTime() {
      return this.getTime(this.valueEndTime);
    }
  },
  methods: {
    reset() {
      setTimeout(() => {
        this.valueStartTime = null;
        this.valueEndTime = null;
        this.valueControlA = null;
        this.valueControlB = null;
      }, 100);
    },
    init() {
      this.valueControlA = this.converValuesToPersent(this.start, 1440);
      this.valueControlB = this.converValuesToPersent(this.end, 1440);
      this.valueStartTime = this.start;
      this.valueEndTime = this.end;
    },
    changeInputSlider(data) {
      this.valueStartTime = this.converPersentToValues(
        data.valueControlA,
        1440
      );
      this.valueEndTime = this.converPersentToValues(data.valueControlB, 1440);
    },
    changeStartTime(e) {
      let minuts = this.converTimeStringToMinuts(e.target.value);
      if (minuts > this.valueEndTime) {
        minuts = this.valueEndTime;
      }
      this.valueStartTime = minuts;
      this.valueControlA = this.converValuesToPersent(minuts, 1440);
    },
    changeEndTime(e) {
      let minuts = this.converTimeStringToMinuts(e.target.value);
      if (minuts < this.valueStartTime) {
        minuts = this.valueStartTime;
      }
      this.valueEndTime = minuts;
      this.valueControlB = this.converValuesToPersent(minuts, 1440);
    },
    getTime(minuts) {
      let h = parseInt(minuts / 60);
      let m = parseInt(minuts % 60);
      if (h < 10) {
        h = `0${h}`;
      }
      if (m < 10) {
        m = `0${m}`;
      }
      return `${h}:${m}`;
    },
    converValuesToPersent(value, maxValue) {
      return 100 / (maxValue / value);
    },
    converPersentToValues(persents, maxValue) {
      return maxValue * (persents / 100);
    },
    converTimeStringToMinuts(str) {
      const array = str.split(":");
      let h = parseInt(array[0]);
      if (h < 0) {
        h = 0;
      }
      if (h > 24) {
        h = 24;
      }
      let m = parseInt(array[1]);
      if (m > 59) {
        m = 59;
      }
      if (m < 0) {
        m = 0;
      }
      return h * 60 + m;
    }
  }
};
</script>

<style lang="scss">
.time-slider {
  &__controls {
    display: flex;
    align-items: center;
    position: absolute;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
  }
  &__input {
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
</style>