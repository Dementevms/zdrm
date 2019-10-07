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

export default class Slider {
  constructor() {
    this.slider = document.querySelector(".js-slider");
    if (this.slider) {
      this.init();
    }
  }

  init() {
    this.control = null;
    this.initSliders();
    this.bind();
  }

  initSliders() {
    document.querySelectorAll(".js-slider").forEach(item => {
      this.initControls(item);
      this.initBar(item);
    });
  }

  initControls(slider) {
    const leftControl = slider.querySelector(".js-slider-control-left");
    const rightControl = slider.querySelector(".js-slider-control-right");

    const leftControlMinuts = leftControl.dataset.minuts;
    const rightControlMinuts = rightControl.dataset.minuts;

    const left = (leftControlMinuts * this.slider.clientWidth) / 1440;
    const right = (rightControlMinuts * this.slider.clientWidth) / 1440;

    leftControl.style.left = `${left}px`;
    rightControl.style.left = `${right}px`;
  }

  initBar(slider) {
    const bar = slider.querySelector(".js-slider-bar");
    const leftControl = slider.querySelector(".js-slider-control-left");
    const rightControl = slider.querySelector(".js-slider-control-right");
    this.setBar(slider, bar, leftControl, rightControl);
  }

  bind() {
    document.addEventListener(
      "mousedown",
      e => {
        if (
          e.target.closest(".js-slider-control-left") ||
          e.target.closest(".js-slider-control-right")
        ) {
          this.clickControl(e);
        }
        // if (e.target.closest(".js-slider")) {
        //   this.slider = e.target.closest(".js-slider");
        //   this.click(e);
        // }
      },
      false
    );
    // const move = throttle(e => this.move(e), 60);
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
        this.control = null;
      },
      false
    );
  }

  clickControl(e) {
    console.log("initControl");
    this.slider = e.target.closest(".js-slider");
    this.slider.clientX = this.slider.getBoundingClientRect().left;

    this.controlLeft = this.slider.querySelector(".js-slider-control-left");
    this.controlRight = this.slider.querySelector(".js-slider-control-right");

    if (e.target.closest(".js-slider-control-left")) {
      this.control = this.controlLeft;
    }
    if (e.target.closest(".js-slider-control-right")) {
      this.control = this.controlRight;
    }

    console.log("this.control", this.control);

    this.bar = this.slider.querySelector(".js-slider-bar");
  }

  // click(e) {
  //   const x = e.clientX - this.slider.getBoundingClientRect().left;
  //   const control = this.slider.querySelector(".js-slider-control");
  //   console.log("this.slider.clientWidth", this.slider.clientWidth);
  //   console.log("x", x);
  //   const minuts = 1440;
  //   const percent = 100 / (this.slider.clientWidth / x);
  //   const result = minuts / (100 / percent);
  //   const time = this.getTime(result);
  //   console.log("time", time);
  //   control.style.left = `${x}px`;
  // }

  move(e) {
    const x = e.clientX - this.slider.clientX;
    this.control.style.left = `${x}px`;
    this.setBar(this.slider, this.bar, this.controlLeft, this.controlRight);
  }

  setBar(slider, bar, controlLeft, controlRight) {
    const left = parseInt(controlLeft.style.left);
    const right = slider.clientWidth - parseInt(controlRight.style.left);
    bar.style.left = `${left}px`;
    bar.style.right = `${right}px`;
  }

  setTime(slider){

  }

  // setValue(slider, controlLeft, controlRight) {
  //   const left = parseInt(this.controlLeft.style.left);
  //   const right = this.slider.clientWidth - parseInt(this.controlLeft.style.left);
  //   this.value.style.left = `${left}px`;
  //   this.value.style.right = `${right}px`;
  // }

  // getSliderValueLeft() {
  //   return this.getPercent(this.controlLeft.dataset.value);
  // }

  // getSliderValueWidth() {
  //   const leftControlValue = this.getPercent(this.controlLeft.dataset.value);
  //   const rightControlValue = this.getPercent(this.controlRight.dataset.value);
  //   return rightControlValue - leftControlValue;
  // }

  // // setPositionValue(obj){
  // //   const valueWidth = rightControlValue - leftControlValue;
  // //   const value = obj.querySelector(".js-slider-value");
  // //   value.style.left = `${leftControlValue}%`;
  // //   value.style.width = `${valueWidth}%`;
  // // }

  // setPositionControls(obj) {
  //   const leftControl = obj.querySelector(".js-slider-control-left");
  //   const rightControl = obj.querySelector(".js-slider-control-right");
  //   const leftControlValue = this.getPercent(leftControl.dataset.value);
  //   const rightControlValue = this.getPercent(rightControl.dataset.value);
  //   leftControl.style.left = `${leftControlValue}%`;
  //   rightControl.style.left = `${rightControlValue}%`;

  //   const valueWidth = rightControlValue - leftControlValue;
  //   const value = obj.querySelector(".js-slider-value");
  //   value.style.left = `${leftControlValue}%`;
  //   value.style.width = `${valueWidth}%`;
  // }

  // setPositionControl() {}

  // getTime(minuts) {
  //   const h = parseInt(minuts / 60);
  //   const m = parseInt(60 / (100 / ((minuts / 60 - h) * 100)));
  //   return { h, m };
  // }

  // getPercent(minuts) {
  //   const result = parseInt(100 / (1440 / minuts));
  //   return result;
  // }

  // getMinuts(){

  // }

  // converMinutsPercents(value, revers){

  // }

  // convertPercentsPixels(value, revers){

  // }
}
