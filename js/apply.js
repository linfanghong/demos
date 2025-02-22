const person = {
  name: 'John',
}

function sayHello(greet, message) {
  console.log(`Hello, ${this.name}, ${greet}, ${message}`)
}

sayHello.apply(person, ['how are you?', 'i am fine'])

Function.prototype.selfApply = function (context, args) {
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

sayHello.selfApply(person, ['how are you?', 'i am fine'])
