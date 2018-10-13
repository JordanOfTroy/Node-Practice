require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      massive = require('massive')
      
const ctrl = require('./Controller'),
      checkUserSession = require('./middleware/checkUserSession'),
      sayHello = require('./middleware/sayHello')

const app = express()
const {
  SESSION_SECRET,
  SERVER_PORT,
  CONNECTION_STRING
} = process.env

// massive(CONNECTION_STRING).then(db => app.set('db', db))
// As this is not going to be connecting to a live DB massive is not needed.

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

// this is where you could also use body-parser.json() if you chose to installed is.      
 app.use(express.json())

 //Middleware req. 1
 app.use(checkUserSession)

 //Middleware req. 2
 app.use(sayHello)

 app.use(express.static(`${__dirname}/../build`))

 /********* PUT YOUR ENDPOINTS HERE ************/

 // GET


 // POST


 // PUT 


 // DELETE


 // OTHER/MISC


 /***********************************************/

 app.listen(SERVER_PORT, () => {
   console.log(`You're listening to ${SERVER_PORT}FM radio`)
 })

