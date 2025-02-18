// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Error')
//   }, 1000)
// })

// promise
//   .then((res) => {
//     console.log('111', res)
//   })
//   .catch((err) => {
//     console.log('222', promise, err)
//   })

class SelfPromise {
  constructor(executor) {
    this.state = 'pending'
    this.result = null
    this.error = null
    executor(this.resolve, this.reject)
  }
  resolve = (result) => {
    if (this.state === 'pending') {
      this.state = 'fulfilled'
      this.result = result
    }
  }
  reject = (error) => {
    if (this.state === 'pending') {
      this.state = 'rejected'
      this.error = error
    }
  }
  then = (onFulfilled, onRejected) => {
    if (this.state === 'fulfilled' && onFulfilled) {
      return onFulfilled(this.result)
    }
    if (this.state === 'rejected' && onRejected) {
      return onRejected(this.error)
    }
  }
  catch = (onRejected) => {
    if (this.state === 'rejected' && onRejected) {
      return onRejected(this.error)
    }
  }
}

const promise = new SelfPromise((resolve, reject) => {
  resolve('result')
})

promise.then((res) => {
  console.log('111', res)
})
