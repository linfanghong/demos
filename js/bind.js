const person = {
  name: 'John',
}

function sayHello(greet, message) {
  console.log(`Hello, ${this.name}, ${greet}, ${message}`)
}

const newSayHello = sayHello.bind(person, 'how are you?', 'i am fine')

newSayHello()

Function.prototype.selfBind = function () {
  const context = arguments[0]
  const args = [...arguments].slice(1)
  context.fn = this
  return function () {
    context.fn(...args)
  }
}

const newSelfSayHello = sayHello.selfBind(person, 'how are you?', 'i am fine')

newSelfSayHello()
