// 后执行
const debounce = (func, time) => {
  let timer = 0
  return function () {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      func()
    }, time)
  }
}

// 前执行
const debounce2 = (func, time) => {
  let timer = 0
  let flag = false
  return function () {
    window.clearTimeout(timer)
    if (!flag) {
      func()
    } else {
      timer = window.setTimeout(() => {
        flag = false
      }, time)
    }
    flag = true
  }
}

const throttle = (func, time) => {
  let flag = false
  return function () {
    if (!flag) {
      func()
      flag = true
      setTimeout(() => {
        flag = false
      }, time)
    }
  }
}
