module.exports = function (req, res, next) {
  if (!req.session.use) {
    req.session.user = {}
  }
  next()
}