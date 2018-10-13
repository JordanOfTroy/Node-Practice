const data = require('./../Data')

testNumber = 1

module.exports = {
  getAllObjs: (req, res) => {
    console.log(`GET-EP has been hit`)
   res.status(200).send(data)
  },

  postNewObj: (req, res) => {
    console.log(`POST_EP has been hit`)
    data.push({
      "name": testNumber,
      "start": testNumber,
      "end": testNumber
    })
    res.status(200).send(data)
    testNumber ++
  }
}