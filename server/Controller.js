const data = require('./../Data')

testNumber = 1

module.exports = {
  getAllObjs: (req, res) => {
    console.log(`getAllObjs has been hit`)
   res.status(200).send(data)
  },

  getByIndex: (req, res) => {
    console.log(`getByIndex has been hit`)
    let {index} = req.params 
    res.status(200).send(data[index])

  },

  postNewObj: (req, res) => {
    console.log(`PostNewObj has been hit`)
    data.push({
      "name": testNumber,
      "start": testNumber,
      "end": testNumber
    })
    res.status(200).send(data)
    testNumber ++
  }
}