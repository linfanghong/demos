// 原生
// const flatten = (list) => {
//   if (Array.isArray(list)) {
//     let result = []
//     list.forEach((item) => {
//       if (!Array.isArray(item)) {
//         result = [...result, item]
//       } else {
//         result = [...result, ...flatten(item)]
//       }
//     })
//     return result
//   } else {
//     return list
//   }
// }

// 使用Array原型的方法
// const flatten = (list) => {
//   return list.reduce((acc, cur) => {
//     return acc.concat(Array.isArray(cur) ? flatten(cur) : cur)
//   }, [])
// }

// 栈 迭代
const flatten = (list) => {
  const stack = [...list]
  const result = []
  while (stack.length) {
    const item = stack.pop()
    if (Array.isArray(item)) {
      stack.push(...item)
    } else {
      result.push(item)
    }
  }
  return result.reverse()
}

console.log('result ', flatten([1, [2, 3, [4, 5, [6]]]]))
