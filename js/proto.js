// 原型链继承

// function Father() {
//   this.colors = ['red', 'green', 'yellow']
// }

// function Son() {}

// Son.prototype = new Father()

// const son1 = new Son()

// const son2 = new Son()

// son1.colors.push('blue')

// console.log(son2.colors)

// 经典继承

// function Father() {
//   this.colors = ['red', 'green', 'yellow']
// }

// function Son() {
//   Father.call(this)
// }

// const son1 = new Son()

// son1.colors.push('blue')

// const son2 = new Son()

// console.log(son1.colors, son2.colors)

// 组合继承

// function Father() {
//   this.colors = ['red', 'green', 'yellow']
// }

// Father.prototype.addColor = function (newColor) {
//   this.colors.push(newColor)
// }

// function Son() {
//   Father.call(this)
// }

// Son.prototype = new Father()

// const son1 = new Son()

// son1.addColor('blue')

// const son2 = new Son()

// console.log(son1.colors, son2.colors)

// 原型继承

// function Father() {
//   this.colors = ['red', 'green', 'yellow']
// }

// Father.prototype.addColor = function (newColor) {
//   this.colors.push(newColor)
// }

// const father = new Father()

// const son1 = Object.create(father)

// const son2 = Object.create(father)

// 寄生继承

// function Father() {
//   this.colors = ['red', 'green', 'yellow']
// }

// Father.prototype.getColor = function () {
//   return this.colors
// }

// const father = new Father()

// function createAnther(obj) {
//   const ins = Object.create(obj)
//   ins.addColor = function (newColor) {
//     this.colors.push(newColor)
//   }
//   return ins
// }

// const son1 = createAnther(father)

// const son2 = createAnther(father)

// 寄生组合继承

// function inherit(Father, Son) {
//   Son.prototype = Object.create(Father.prototype)
//   Son.prototype.constructor = Son
// }

// function Father() {
//   this.colors = ['red', 'green', 'yellow']
// }

// Father.prototype.getColor = function () {
//   return this.colors
// }

// function Son() {
//   Father.call(this)
// }

// inherit(Father, Son)

// const son1 = new Son()

// const son2 = new Son()

// ES6 class

// class Father {
//   constructor() {
//     this.colors = ['red', 'green', 'yellow']
//   }
//   addColor(newColor) {
//     this.colors.push(newColor)
//   }
// }

// class Son extends Father {
//   constructor() {
//     super()
//   }
//   addColor(newColor) {
//     console.log('111')
//     super.addColor(newColor)
//   }
// }

// const son1 = new Son()
