function sleep(time) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve()
      clearTimeout(timer)
    }, time)
  })
}

const execute = async () => {
  console.log('111')
  await sleep(3e3)
  console.log('222')
}

execute()
