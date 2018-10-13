const data = require('./../Data')

testNumber = 1

module.exports = {
  getAllObjs: (req, res) => {
    console.log(`getAllObjs has been hit`)
    let {query} = req
    console.log('query.name:', query.name)
    let {name} = query
    let objArr = []
    data.forEach(element => {
      console.log('element.name:', element.name)
      if (element.name === name) {
        objArr.push(element)
      } 
    })
    console.log('item:', objArr)
   res.status(200).send(objArr)
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