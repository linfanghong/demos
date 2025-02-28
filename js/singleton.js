const createSingleton = (function () {
  let ins = null
  return function (name) {
    if (ins) {
      return ins
    } else {
      ins = { name }
      return { name }
    }
  }
})()

const p1 = createSingleton('p1')
const p2 = createSingleton('p2')

console.log('>>>', p1, p2)
