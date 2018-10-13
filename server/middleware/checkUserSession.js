module.exports = function (req, res, next) {
  if (!res.session.use) {
    req.session.user = {}
  }
  next()
}