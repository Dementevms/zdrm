export default class Slider {
  constructor() {
    this.slider = document.querySelector(".js-slider");
    if (this.slider) {
      this.init();
      // const minuts = 1440;
      // const percent = 30;
      // const result = minuts / (100 / percent);
      // const time = this.getTime(result);
    }
  }

  getTime(minuts) {
    const h = parseInt(minuts / 60);
    const m = parseInt(60 / (100 / ((minuts / 60 - h) * 100)));
    return { h, m };
  }

  init() {
    this.control = null;
    this.bind();

    const items = document.querySelectorAll('.js-slider');
    items.forEach(item => {
      const leftControl = item.querySelector('.js-slider-control-left');
      const rightControl = item.querySelector('.js-slider-control-right');
      const leftControlValue = this.getPercent(leftControl.dataset.value);
      const rightControlValue = this.getPercent(rightControl.dataset.value);
      leftControl.style.left = `${leftControlValue}%`;
      rightControl.style.left = `${rightControlValue}%`;

      const valueWidth = rightControlValue - leftControlValue;
      const value = item.querySelector('.js-slider-value');
      value.style.left = `${leftControlValue}%`;
      value.style.width = `${valueWidth}%`;
    });

  }

  getPercent(minuts){
    const result = parseInt(100 / (1440 / minuts));
    return result; 
  }

  bind() {
    document.addEventListener(
      "mousedown",
      e => {
        // if (e.target.closest(".js-slider-control")) {
        //   this.control = e.target.closest(".js-slider-control");
        //   this.slider = e.target.closest(".js-slider");
        //   this.slider.clientX = this.slider.getBoundingClientRect().left;
        // }
        if (e.target.closest(".js-slider")) {
          this.slider = e.target.closest(".js-slider");
          this.click(e);
        }
      },
      false
    );
    // document.addEventListener(
    //   "mousemove",
    //   e => {
    //     if (this.control) {
    //       this.move(e);
    //     }
    //   },
    //   false
    // );
    document.addEventListener(
      "mouseup",
      () => {
        this.control = null;
      },
      false
    );
  }

  click(e) {
    const x = e.clientX - this.slider.getBoundingClientRect().left;
    const control = this.slider.querySelector(".js-slider-control");
    console.log('this.slider.clientWidth', this.slider.clientWidth);
    console.log('x', x);
    const minuts = 1440;
    const percent = 100 / (this.slider.clientWidth / x);
    const result = minuts / (100 / percent);
    const time = this.getTime(result);
    console.log("time", time);
    control.style.left = `${x}px`;
  }

  move(e) {
    const x = e.clientX - this.slider.clientX;
    this.control.style.left = `${x}px`;
  }
}
