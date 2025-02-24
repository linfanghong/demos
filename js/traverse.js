const student = {
  identity: 'student',
}

const person = Object.create(student)

Object.defineProperty(person, 'weight', {
  value: 70,
  writable: false,
  enumerable: false,
  configurable: false,
})

person.name = 'John'

person.age = 20

// 第一种 for in 遍历的是可继承属性可遍历属性
for (attr in person) {
  console.log('111', attr, person[attr])
}

// 使用Object的静态方法
console.log(
  '111',
  Object.keys(person),
  Object.values(person),
  Object.entries(person)
)

console.log('111', Object.getOwnPropertyNames(person))

console.log('111', Object.getOwnPropertySymbols(person))

console.log('111', Reflect.ownKeys(person))
