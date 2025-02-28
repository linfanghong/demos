// const p1 = new Promise((resolve, reject) => {
//   console.log('create a promise')
//   resolve('成功了')
// })

// console.log('after new promise')

// const p2 = p1.then((data) => {
//   console.log(data)
//   throw new Error('失败了')
// })

// const p3 = p2.then(
//   (data) => {
//     console.log('success', data)
//   },
//   (err) => {
//     console.log('failed', err)
//   }
// )

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
      const resolveFunc = this.resolveHandlerList.shift()
      resolveFunc && resolveFunc(this.value)
    }
  }
  reject = (reason) => {
    if (this.state === 'pending') {
      this.state = 'rejected'
      this.reason = reason
      const rejectFunc = this.rejectHandlerList.shift()
      rejectFunc && rejectFunc(this.reason)
    }
  }
  then = (onFulfilled, onRejected) => {
    if (!onFulfilled) {
      return this
    }
    return new SelfPromise((resolve, reject) => {
      try {
        if (this.state === 'pending') {
          this.resolveHandlerList.push(onFulfilled)
          this.rejectHandlerList.push(onRejected)
        }
        if (this.state === 'fulfilled' && this.value && onFulfilled) {
          resolve(onFulfilled(this.value))
        }
        if (this.state === 'rejected' && this.reason && onRejected) {
          reject(onRejected(this.reason))
        }
      } catch (err) {
        reject(err)
      }
    })
  }
  catch = (onRejected) => {
    return new SelfPromise((resolve, reject) => {
      try {
        if (this.state === 'pending') {
          this.rejectHandlerList.push(onRejected)
        }
        if (this.state === 'rejected' && this.reason && onRejected) {
          reject(onRejected(this.reason))
        }
      } catch (err) {
        reject(err)
      }
    })
  }
}

const n1 = new SelfPromise((resolve, reject) => {
  console.log('create a promise')
  resolve('成功了')
})

console.log('after new promise')

const n2 = n1.then((data) => {
  console.log(data)
  throw new Error('失败了')
})

const n3 = n2.then()

n3.then(
  (data) => {
    console.log('success', data)
  },
  (err) => {
    console.log('failed', err)
  }
)
