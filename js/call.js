const person = {
  name: 'John',
}

function sayHello(extra) {
  console.log(`Hello, ${this.name}, ${extra}`)
}

sayHello.call(person, 'how are you?')

Function.prototype.selfCall = function () {
  const context = arguments[0]
  const args = [...arguments].slice(1)
  context.fn = this
  const result = context.fn(args)
  delete context.fn
  return result
}

sayHello.selfCall(person, 'how are you?')
