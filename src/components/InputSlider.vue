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
    valueControlA: Number,
    valueControlB: Number
  },
  data() {
    return {
      slider: null,
      control: null,
      controlA: null,
      controlB: null,
      bar: null,
      stateControlA: null,
      stateControlB: null,
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    currentValueControlA() {
      return this.stateControlA;
    },
    currentValueControlB() {
      return this.stateControlB;
    }
  },
  watch: {
    currentValueControlA(value) {
      const position = this.converPersentsToPosition(this.slider, value);
      this.moveControl(this.slider, this.controlA, position);
      this.updateBar(this.slider, this.controlA, this.controlB, this.bar);
    },
    currentValueControlB(value) {
      const position = this.converPersentsToPosition(this.slider, value);
      this.moveControl(this.slider, this.controlB, position);
      this.updateBar(this.slider, this.controlA, this.controlB, this.bar);
    }
  },
  methods: {
    init() {
      // console.log('this', this);
      this.slider = this.$refs.slider;
      this.slider.clientX = this.slider.getBoundingClientRect().left;
      this.controlA = this.$refs.controlA;
      this.controlB = this.$refs.controlB;
      this.bar = this.$refs.bar;
      this.bind();
      this.setState(this.valueControlA, this.valueControlB);
    },
    bind() {
      document.addEventListener(
        "mousemove",
        e => {
          if (this.control) {
            this.move(e);
          }
        },
        false
      );
      document.addEventListener(
        "mouseup",
        e => {
          if (this.control) {
            this.stop();
          }
        },
        false
      );
    },
    setState(valueControlA, valueControlB) {
      this.stateControlA = valueControlA;
      this.stateControlB = valueControlB;
      this.$emit('set-state-slider', valueControlA);
      // const data = {
      //   valueControlA,
      //   valueControlB
      // };
      // this.state = {
      //   valueControlA,
      //   valueControlB
      // };
      // this.$store.dispatch("inputSlider/setControlsValues", data);
    },
    setControl(name) {
      if (name === "A") {
        this.control = this.controlA;
      }
      if (name === "B") {
        this.control = this.controlB;
      }
    },
    stop() {
      this.control = null;
      const positionControlA = parseInt(this.controlA.style.left);
      const positionControlB = parseInt(this.controlB.style.left);
      const valueControlA = this.converPositionToPersents(
        this.slider,
        positionControlA
      );
      const valueControlB = this.converPositionToPersents(
        this.slider,
        positionControlB
      );
      this.setState(valueControlA, valueControlB);
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
    converPersentsToPosition(slider, persents) {
      return parseInt(slider.clientWidth * (persents / 100));
    },
    converPositionToPersents(slider, position) {
      return 100 / (slider.clientWidth / position);
    }
  }
};
</script>