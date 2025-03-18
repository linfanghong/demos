class SelfPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = null
    this.reason = null
    this.resolveHandlerList = []
    this.rejectHandlerList = []
    try {
      executor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }
  resolve = (value) => {
    if (this.state === 'pending') {
      this.state = 'fulfilled'
      this.value = value
      this.resolveHandlerList.forEach((fn) => {
        fn(value)
      })
    }
  }
  reject = (reason) => {
    if (this.state === 'pending') {
      this.state = 'rejected'
      this.reason = reason
      this.rejectHandlerList.forEach((fn) => {
        fn(reason)
      })
    }
  }
  then = (onFulfilled, onRejected) => {
    const promise2 = new SelfPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        const result = onFulfilled(this.value)
        queueMicrotask(() => {
          if (promise2 === result) {
            return reject(
              new TypeError('Chaining cycle detected for promise #<Promise>')
            )
          } else if (result instanceof SelfPromise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        })
      } else if (this.state === 'rejected') {
        const result = onRejected(this.reason)
        reject(result)
      } else if (this.state === 'pending') {
        this.resolveHandlerList.push(() => {
          setTimeout(onFulfilled, 0)
        })
        this.rejectHandlerList.push(() => {
          setTimeout(onRejected, 0)
        })
      }
    })

    return promise2
  }
}

const n1 = new SelfPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功了')
  }, 1000)
  console.log('create a promise')
})

n1.then((data) => {
  console.log('111', data)
  return 5
  // return new SelfPromise((resolve, reject) => {
  //   resolve('成功了2')
  // })
}).then((data) => {
  console.log('222', data)
})
