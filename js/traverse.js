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

person[Symbol('id')] = '001'

// 第一种 for in 遍历的是可继承属性可枚举属性
for (attr in person) {
  console.log('111', attr, person[attr])
}

// 使用Object的静态方法 可枚举属性
console.log(
  '222',
  Object.keys(person),
  Object.values(person),
  Object.entries(person)
)

// 使用Object的静态方法 可枚举属性 + 不可枚举属性
console.log('333', Object.getOwnPropertyNames(person))

// 使用Object的静态方法 可枚举属性 + 不可枚举属性 + Symbol属性
console.log('444', Object.getOwnPropertySymbols(person))

// 使用Reflect的静态方法 可枚举属性 + 不可枚举属性 + Symbol属性
console.log('555', Reflect.ownKeys(person))
