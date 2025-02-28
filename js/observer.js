function observe(obj) {
  return new Proxy(obj, {
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver)
      console.log('>>>', value)

      return res
    },
  })
}

const obj = observe({
  name: '111',
})

obj.name = '222'
