/* eslint-disable no-unused-vars */
export default class Slider {
  constructor() {
    // this.config = {
    //   slider: ".js-slider",
    //   control: ".js-slider-control",
    //   controlLeft: ".js-slider-control[data-type=left]",
    //   controlRight: ".js-slider-control[data-type=right]",
    //   bar: ".js-slider-bar"
    // };
    // this.eventSetTime = new Event("inputSliderSetTime");
    // this.slider = document.querySelector(this.config.slider);
    // if (this.slider) {
    //   this.init();
    // }
  }

  // init() {
  //   this.control = null;
  //   this.initSliders();
  //   this.bind();
  // }

  // initSliders() {
  //   document.querySelectorAll(this.config.slider).forEach(item => {
  //     this.initControls(item);
  //     this.initBar(item);
  //   });
  // }

  initControls(slider, config) {
    const leftControl = slider.querySelector(config.controlLeft);
    const rightControl = slider.querySelector(config.controlRight);

    const leftControlMinuts = leftControl.dataset.minuts;
    const rightControlMinuts = rightControl.dataset.minuts;

    const left = (leftControlMinuts * slider.clientWidth) / 1440;
    const right = (rightControlMinuts * slider.clientWidth) / 1440;

    leftControl.style.left = `${left}px`;
    rightControl.style.left = `${right}px`;

    return slider;

    // this.setTime(slider, leftControl, rightControl);
  }

  initBar(slider, config) {
    const bar = slider.querySelector(config.bar);
    const leftControl = slider.querySelector(config.controlLeft);
    const rightControl = slider.querySelector(config.controlRight);
    this.setBar(slider, bar, leftControl, rightControl);
  }

  bind() {
    document.addEventListener(
      "mousedown",
      e => {
        if (e.target.closest(this.config.control)) {
          this.clickControl(e);
        }
        if (
          e.target.closest(this.config.slider) &&
          !e.target.closest(this.config.control)
        ) {
          this.clickBar(e);
        }
      },
      false
    );
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
      () => {
        if (this.slider) {
          this.setTime(this.slider, this.controlLeft, this.controlRight);
          this.reset();
        }
      },
      false
    );
  }

  clickControl(e) {
    this.setSlider(e);
    if (e.target.closest(this.config.controlLeft)) {
      this.control = this.controlLeft;
    }
    if (e.target.closest(this.config.controlRight)) {
      this.control = this.controlRight;
    }
  }

  clickBar(e) {
    this.setSlider(e);
    const x = e.clientX - this.slider.clientX;
    if (x < this.slider.clientWidth / 2) {
      this.control = this.controlLeft;
      this.setControl(x);
    } else {
      this.control = this.controlRight;
      this.setControl(x);
    }
    this.setBar(this.slider, this.bar, this.controlLeft, this.controlRight);
  }

  setSlider(e) {
    this.slider = e.target.closest(this.config.slider);
    this.slider.clientX = this.slider.getBoundingClientRect().left;

    this.controlLeft = this.slider.querySelector(this.config.controlLeft);
    this.controlRight = this.slider.querySelector(this.config.controlRight);

    this.bar = this.slider.querySelector(this.config.bar);
  }

  setControl(x) {
    if (x <= 0) {
      x = 0;
    }
    if (x >= this.slider.clientWidth) {
      x = this.slider.clientWidth;
    }
    if (this.control === this.controlLeft) {
      const left = parseInt(this.controlRight.style.left);
      if (x >= left) {
        x = left;
      }
    }
    if (this.control === this.controlRight) {
      const left = parseInt(this.controlLeft.style.left);
      if (x <= left) {
        x = left;
      }
    }
    this.control.style.left = `${x}px`;
  }

  setBar(slider, bar, controlLeft, controlRight) {
    const left = parseInt(controlLeft.style.left);
    const right = slider.clientWidth - parseInt(controlRight.style.left);
    bar.style.left = `${left}px`;
    bar.style.right = `${right}px`;
  }

  setTime(slider, controlLeft, controlRight) {
    const number = 1440 / slider.clientWidth;
    const start = parseInt(controlLeft.style.left) * number;
    const end = parseInt(controlRight.style.left) * number;
    slider.time = {
      start,
      end
    };
    this.slider.dispatchEvent(this.eventSetTime);
  }

  move(e) {
    const x = e.clientX - this.slider.clientX;
    this.setControl(x);
    this.control.style.left = `${x}px`;
    this.setBar(this.slider, this.bar, this.controlLeft, this.controlRight);
  }

  convert(minuts) {
    const h = parseInt(minuts / 60);
    const m = parseInt(60 / (100 / ((minuts / 60 - h) * 100)));
    return { h, m };
  }

  reset() {
    this.slider = null;
    this.control = null;
  }
}

const throttle = (fn, ms) => {
  let isThrottle = false;
  let saveArgs = null;
  let saveThis = null;
  const wrapper = (...arg) => {
    if (isThrottle) {
      saveArgs = arg;
      saveThis = this;
      return;
    }
    fn.apply(this, arg);
    isThrottle = true;
    setTimeout(() => {
      isThrottle = false;
      if (saveArgs) {
        wrapper.apply(saveThis, saveArgs);
        saveArgs = null;
        saveThis = null;
      }
    }, ms);
  };
  return wrapper;
};
