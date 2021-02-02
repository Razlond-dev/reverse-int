module.exports = function reverse(n) {
  let reversedInt
  if (n < 0) {
    n = n * (-1)
    reversedInt = n.toString().split('').reverse().join('')
  }
  reversedInt = n.toString().split('').reverse().join('')
  return reversedInt
}