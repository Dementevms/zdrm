<template>
  <div ref="slider" class="input-slider">
    <div class="input-slider__bar" ref="bar"></div>
    <div class="input-slider__control-left" ref="controlA" @mousedown="setControl('A')"></div>
    <div class="input-slider__control-right" ref="controlB" @mousedown="setControl('B')"></div>
  </div>
</template>
<script>
export default {
  name: "input-slider",
  props: {
    start: Number,
    end: Number,
    valueControlA: Number,
    valueControlB: Number,
  },
  data() {
    return {
      slider: null,
      control: null,
      controlA: null,
      controlB: null,
      bar: null,
      config: {
        slider: ".js-slider",
        control: ".js-slider-control",
        controlLeft: ".js-slider-control[data-type=left]",
        controlRight: ".js-slider-control[data-type=right]",
        bar: ".js-slider-bar"
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.slider = this.$refs.slider;
      this.slider.clientX = this.slider.getBoundingClientRect().left;
      this.controlA = this.$refs.controlA;
      this.controlB = this.$refs.controlB;
      this.bar = this.$refs.bar;
      this.bind();
    },
    initSlider(){

    },
    initControls(slider, valueControlA, valueControlB){
      const positionA = this.converPersentsToPosition(slider, valueControlA);
      const positionA = this.converPersentsToPosition(slider, valueControlB);
    },
    bind(){
      document.addEventListener(
        "mousemove",
        e => {
          this.move(e);
        },
        false
      );
      document.addEventListener(
        "mouseup",
        e => {
          this.control = null;
        },
        false
      );
    },
    setControl(name) {
      if (name === "A") {
        this.control = this.controlA;
      }
      if (name === "B") {
        this.control = this.controlB;
      }
    },
    move(e) {
      if (this.control) {
        const x = e.clientX - this.slider.clientX;
        this.moveControl(this.slider, this.control, x);
        this.updateBar(this.slider, this.controlA, this.controlB, this.bar);
      }
    },
    moveControl(slider, control, x) {
      if (x <= 0) {
        x = 0;
      }
      if (x >= slider.clientWidth) {
        x = slider.clientWidth;
      }
      control.style.left = `${x}px`;
    },
    updateBar(slider, controlA, controlB, bar) {
      const left = parseInt(controlA.style.left);
      const right = slider.clientWidth - parseInt(controlB.style.left);
      bar.style.left = `${left}px`;
      bar.style.right = `${right}px`;
    },
    converPersentsToPosition(slider, persents){
      return parseInt(slider.clientWidth * (100 / persents));
    }

    // setTime(){
    //   const time = this.$refs.slider.time;
    //   this.$store.dispatch('inputSlider/setTime', time);
    // }
  }
};
</script>