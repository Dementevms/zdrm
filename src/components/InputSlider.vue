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
  model: {
    event: "change"
  },
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
      bar: null
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    valueControlA(value) {
      this.updateControl(this.slider, this.controlA, this.valueControlA);
      this.updateBar(this.slider, this.controlA, this.controlB, this.bar);
    },
    valueControlB(value) {
      this.updateControl(this.slider, this.controlB, this.valueControlB);
      this.updateBar(this.slider, this.controlA, this.controlB, this.bar);
    }
  },
  methods: {
    init() {
      this.slider = this.$refs.slider;
      this.slider.clientX = this.slider.getBoundingClientRect().left;
      this.controlA = this.$refs.controlA;
      this.controlB = this.$refs.controlB;
      this.bar = this.$refs.bar;
      this.updateControl(this.slider, this.controlA, this.valueControlA);
      this.updateControl(this.slider, this.controlB, this.valueControlB);
      this.updateBar(this.slider, this.controlA, this.controlB, this.bar);
      this.bind();
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
      window.addEventListener(
        "resize",
        () => {
          this.reset();
        },
        false
      );
    },
    reset() {
      this.slider = null;
      this.control = null;
      this.controlA = null;
      this.controlB = null;
      this.bar = null;
      this.init();
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
      const data = {
        valueControlA: this.valueControlA,
        valueControlB: this.valueControlB
      };
      if (this.control === this.controlA) {
        const positionControlA = parseInt(this.controlA.style.left);
        data.valueControlA = this.converPositionToPersents(
          this.slider,
          positionControlA
        );
      }
      if (this.control === this.controlB) {
        const positionControlB = parseInt(this.controlB.style.left);
        data.valueControlB = this.converPositionToPersents(
          this.slider,
          positionControlB
        );
      }
      this.$emit("change", data);
      this.control = null;
    },
    move(e) {
      if (this.control) {
        let x = e.clientX - this.slider.clientX;
        if (x < 0) {
          x = 0;
        }
        if (x > this.slider.clientWidth) {
          x = this.slider.clientWidth;
        }
        if (this.control === this.controlA) {
          const positionControlB = parseInt(this.controlB.style.left);
          if (x > positionControlB) {
            x = positionControlB;
          }
        }
        if (this.control === this.controlB) {
          const positionControlA = parseInt(this.controlA.style.left);
          if (x < positionControlA) {
            x = positionControlA;
          }
        }
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
    updateControl(slider, control, percents) {
      const position = this.converPersentsToPosition(slider, percents);
      this.moveControl(slider, control, position);
    },
    updateBar(slider, controlA, controlB, bar) {
      const left = parseInt(controlA.style.left);
      const right = slider.clientWidth - parseInt(controlB.style.left);
      bar.style.left = `${left}px`;
      bar.style.right = `${right}px`;
    },
    converPersentsToPosition(slider, persents) {
      return slider.clientWidth * (persents / 100);
    },
    converPositionToPersents(slider, position) {
      return 100 / (slider.clientWidth / position);
    }
  }
};
</script>