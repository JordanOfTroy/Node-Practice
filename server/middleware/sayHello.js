module.exports = function (req, res, next) {
  console.log('Hello, human!')
  next()
}