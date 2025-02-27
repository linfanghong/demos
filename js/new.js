function Person(name) {
  this.name = name
}

// function Person(name) {
//   return { name }
// }

// const p = new Person('p')

function selfNew(func, name) {
  const obj = Object.create(func.prototype)
  const res = func.call(obj, name)
  return ['object', 'function'].includes(typeof res) ? res : obj
}

const p = selfNew(Person, 'p')

console.log('111', p)
