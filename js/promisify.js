const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

fs.readFile('./js/example.txt', 'utf-8', (err, data) => {
  console.log('111', err, data)
})

const promisify = (func) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      func(...args, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}

const readFilePromise = promisify(fs.readFile)

readFilePromise('./js/example.txt', 'utf-8').then((data, err) => {
  console.log('222', data, err)
})
