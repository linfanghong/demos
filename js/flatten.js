// 原生
// const flatten = (list) => {
//   if (!Array.isArray(list)) {
//     return list
//   } else {
//     let res = []
//     list.forEach((item) => {
//       if (!Array.isArray(item)) {
//         res = [...res, item]
//       } else {
//         res = [...res, ...flatten(item)]
//       }
//     })
//     return res
//   }
// }

// 使用Array原型的方法
// const flatten = (list) => {
//   return list.reduce((acc, cur) => {
//     return acc.concat(Array.isArray(cur) ? flatten(cur) : cur)
//   }, [])
// }

// 栈 迭代
