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
//     console.log('222', err)
//   })

class SelfPromise {
  constructor(executor) {
    this.state = 'pending'
    this.resolveHandlerList = []
    this.rejectHandlerList = []
    executor(this.resolve, this.reject)
  }
  resolve = (result) => {
    if (this.state === 'pending') {
      this.state = 'fulfilled'
      const fn = this.resolveHandlerList.shift()
      return fn(result)
    }
  }
  reject = (error) => {
    if (this.state === 'pending') {
      this.state = 'rejected'
    }
  }
  then = (...args) => {
    this.resolveHandlerList.push(...args)
    return this
  }
  catch = (onRejected) => {
    this.resolveHandlerList.push(onRejected)
    return this
  }
}

SelfPromise.all = (promises) => {
  return new SelfPromise((resolve, reject) => {
    const res = []
    try {
      promises.forEach((promise) => {
        promise
          .then((data) => {
            res.push(data)
            if (res.length === promises.length) {
              resolve(res)
            }
          })
          .catch((err) => {
            reject(err)
          })
      })
    } catch (err) {
      reject(err)
    }
  })
}

SelfPromise.race = (promises) => {
  return new SelfPromise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject)
    })
  })
}

const promise = new SelfPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('result')
  }, 1000)
})

promise.then((res) => {
  console.log('111', res)
})

const promise1 = new SelfPromise((resolve, reject) => {
  setTimeout(() => {
    reject('result1')
  }, 5e2)
})

const promise2 = new SelfPromise((resolve) => {
  setTimeout(() => {
    resolve('result2')
  }, 1e3)
})

SelfPromise.race([promise1, promise2])
  .then((res) => {
    console.log('race resolve', res)
  })
  .catch((err) => {
    console.log('race reject', err)
  })

SelfPromise.all([promise1, promise2])
  .then((res) => {
    console.log('all resolve', res)
  })
  .catch((err) => {
    console.log('all reject', err)
  })
