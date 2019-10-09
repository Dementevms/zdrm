// eslint-disable-next-line no-undef
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

export default throttle;
