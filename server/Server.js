require('dotenv').config()
const express = require('express'),
      session = require('express-session')
      // massive = require('massive')
      
const ctrl = require('./Controller'),
      checkUserSession = require('./middleware/checkUserSession'),
      sayHello = require('./middleware/sayHello'),
      data = require('../Data')

const app = express()
const {
  SESSION_SECRET,
  SERVER_PORT,
  CONNECTION_STRING
} = process.env

// massive(CONNECTION_STRING).then(db => app.set('db', db))
// As this is not going to be connecting to a live DB massive is not needed.

// this is where you could also use body-parser.json() if you chose to installed is.      
app.use(express.json())

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))


 //Middleware req. 1
 app.use(checkUserSession)

 //Middleware req. 2
 app.use(sayHello)

 app.use(express.static(`${__dirname}/../build`))

 /********* PUT YOUR ENDPOINTS HERE ************/

 // GET
app.get(`/api/array`, ctrl.getAllObjs)
app.get(`/api/array/index/id/:index`, ctrl.getByIndex)

 // POST
app.post(`/api/array`, ctrl.postNewObj)

 // PUT 


 // DELETE


 // OTHER/MISC


 /***********************************************/

 app.listen(SERVER_PORT, () => {
   console.log(`You're listening to ${SERVER_PORT}FM radio`)
 })


 //used for example purposes
 var items = [
   {
     "Name":"chevrolet chevelle malibu",
     "Miles_per_Gallon":18,
     "Cylinders":8,
     "Displacement":307,
     "Horsepower":130,
     "Weight_in_lbs":3504,
     "Acceleration":12,
     "Year":"1970-01-01",
     "Origin":"USA"
    },
    {
      "Name":"ford torino",
    "Miles_per_Gallon":17,
    "Cylinders":8,
    "Displacement":302,
    "Horsepower":140,
    "Weight_in_lbs":3449,
    "Acceleration":10.5,
    "Year":"1970-01-01",
    "Origin":"USA"
  },
  {"Name":"pontiac catalina",
  "Miles_per_Gallon":14,
  "Cylinders":8,
  "Displacement":455,
  "Horsepower":225,
  "Weight_in_lbs":4425,
  "Acceleration":10,
  "Year":"1970-01-01",
  "Origin":"USA"
},
{
  "Name":"ford torino (sw)",
  "Miles_per_Gallon":null,
  "Cylinders":8,
  "Displacement":351,
  "Horsepower":153,
  "Weight_in_lbs":4034,
  "Acceleration":11,
  "Year":"1970-01-01",
  "Origin":"USA"
},
{"Name":"plymouth 'cuda 340","Miles_per_Gallon":14,"Cylinders":8,"Displacement":340,"Horsepower":160,"Weight_in_lbs":3609,"Acceleration":8,"Year":"1970-01-01","Origin":"USA"},{"Name":"toyota corona mark ii","Miles_per_Gallon":24,"Cylinders":4,"Displacement":113,"Horsepower":95,"Weight_in_lbs":2372,"Acceleration":15,"Year":"1970-01-01","Origin":"Japan"},{"Name":"datsun pl510","Miles_per_Gallon":27,"Cylinders":4,"Displacement":97,"Horsepower":88,"Weight_in_lbs":2130,"Acceleration":14.5,"Year":"1970-01-01","Origin":"Japan"},{"Name":"saab 99e","Miles_per_Gallon":25,"Cylinders":4,"Displacement":104,"Horsepower":95,"Weight_in_lbs":2375,"Acceleration":17.5,"Year":"1970-01-01","Origin":"Europe"},{"Name":"chevy c20","Miles_per_Gallon":10,"Cylinders":8,"Displacement":307,"Horsepower":200,"Weight_in_lbs":4376,"Acceleration":15,"Year":"1970-01-01","Origin":"USA"},{"Name":"chevrolet vega 2300","Miles_per_Gallon":28,"Cylinders":4,"Displacement":140,"Horsepower":90,"Weight_in_lbs":2264,"Acceleration":15.5,"Year":"1971-01-01","Origin":"USA"},{"Name":"amc gremlin","Miles_per_Gallon":19,"Cylinders":6,"Displacement":232,"Horsepower":100,"Weight_in_lbs":2634,"Acceleration":13,"Year":"1971-01-01","Origin":"USA"},{"Name":"amc matador","Miles_per_Gallon":18,"Cylinders":6,"Displacement":232,"Horsepower":100,"Weight_in_lbs":3288,"Acceleration":15.5,"Year":"1971-01-01","Origin":"USA"},{"Name":"plymouth fury iii","Miles_per_Gallon":14,"Cylinders":8,"Displacement":318,"Horsepower":150,"Weight_in_lbs":4096,"Acceleration":13,"Year":"1971-01-01","Origin":"USA"},{"Name":"amc hornet sportabout (sw)","Miles_per_Gallon":18,"Cylinders":6,"Displacement":258,"Horsepower":110,"Weight_in_lbs":2962,"Acceleration":13.5,"Year":"1971-01-01","Origin":"USA"},{"Name":"mercury capri 2000","Miles_per_Gallon":23,"Cylinders":4,"Displacement":122,"Horsepower":86,"Weight_in_lbs":2220,"Acceleration":14,"Year":"1971-01-01","Origin":"USA"},{"Name":"toyota corolla 1200","Miles_per_Gallon":31,"Cylinders":4,"Displacement":71,"Horsepower":65,"Weight_in_lbs":1773,"Acceleration":19,"Year":"1971-01-01","Origin":"Japan"},{"Name":"toyota corona hardtop","Miles_per_Gallon":24,"Cylinders":4,"Displacement":113,"Horsepower":95,"Weight_in_lbs":2278,"Acceleration":15.5,"Year":"1972-01-01","Origin":"Japan"},{"Name":"ford pinto runabout","Miles_per_Gallon":21,"Cylinders":4,"Displacement":122,"Horsepower":86,"Weight_in_lbs":2226,"Acceleration":16.5,"Year":"1972-01-01","Origin":"USA"},{"Name":"ford galaxie 500","Miles_per_Gallon":14,"Cylinders":8,"Displacement":351,"Horsepower":153,"Weight_in_lbs":4129,"Acceleration":13,"Year":"1972-01-01","Origin":"USA"},{"Name":"oldsmobile delta 88 royale","Miles_per_Gallon":12,"Cylinders":8,"Displacement":350,"Horsepower":160,"Weight_in_lbs":4456,"Acceleration":13.5,"Year":"1972-01-01","Origin":"USA"},{"Name":"chevrolet chevelle concours (sw)","Miles_per_Gallon":13,"Cylinders":8,"Displacement":307,"Horsepower":130,"Weight_in_lbs":4098,"Acceleration":14,"Year":"1972-01-01","Origin":"USA"},{"Name":"volkswagen 411 (sw)","Miles_per_Gallon":22,"Cylinders":4,"Displacement":121,"Horsepower":76,"Weight_in_lbs":2511,"Acceleration":18,"Year":"1972-01-01","Origin":"Europe"},{"Name":"datsun 510 (sw)","Miles_per_Gallon":28,"Cylinders":4,"Displacement":97,"Horsepower":92,"Weight_in_lbs":2288,"Acceleration":17,"Year":"1972-01-01","Origin":"Japan"},{"Name":"buick century 350","Miles_per_Gallon":13,"Cylinders":8,"Displacement":350,"Horsepower":175,"Weight_in_lbs":4100,"Acceleration":13,"Year":"1973-01-01","Origin":"USA"},{"Name":"dodge coronet custom","Miles_per_Gallon":15,"Cylinders":8,"Displacement":318,"Horsepower":150,"Weight_in_lbs":3777,"Acceleration":12.5,"Year":"1973-01-01","Origin":"USA"},{"Name":"plymouth fury gran sedan","Miles_per_Gallon":14,"Cylinders":8,"Displacement":318,"Horsepower":150,"Weight_in_lbs":4237,"Acceleration":14.5,"Year":"1973-01-01","Origin":"USA"},{"Name":"plymouth valiant","Miles_per_Gallon":18,"Cylinders":6,"Displacement":225,"Horsepower":105,"Weight_in_lbs":3121,"Acceleration":16.5,"Year":"1973-01-01","Origin":"USA"},{"Name":"plymouth duster","Miles_per_Gallon":23,"Cylinders":6,"Displacement":198,"Horsepower":95,"Weight_in_lbs":2904,"Acceleration":16,"Year":"1973-01-01","Origin":"USA"},{"Name":"plymouth custom suburb","Miles_per_Gallon":13,"Cylinders":8,"Displacement":360,"Horsepower":170,"Weight_in_lbs":4654,"Acceleration":13,"Year":"1973-01-01","Origin":"USA"},{"Name":"chevrolet vega","Miles_per_Gallon":21,"Cylinders":4,"Displacement":140,"Horsepower":72,"Weight_in_lbs":2401,"Acceleration":19.5,"Year":"1973-01-01","Origin":"USA"},{"Name":"mercury capri v6","Miles_per_Gallon":21,"Cylinders":6,"Displacement":01-01,"Origin":"Japan"},{"Name":"chevrolet chevelle malibu classic","Miles_per_Gallon":16,"Cylinders":6,"Displacement":250,"Horsepower":100,"Weight_in_lbs":3781,"Acceleration":17,"Year":"1974-01-01","Origin":"USA"},	{"Name":"buick century luxus (sw)","Miles_per_gallon":15,"Acceleration":16,"Year":"1975-01-01","Origin":"USA"},{"Name":"chevrolet bel air","Miles_per_Gallon":15,"Cylinders":8,"Displacement":350,"Horsepower":145,"Weight_in_lbs":4440,"Acceleration":14,"Year":"1975","Weight_in_lbs":2694,"Acceleration":15,"Year":"1975-01-01","Origin":"Europe"},{"Name":"honda civic cvcc","Miles_per_Gallon":33,"Cylinders":4,"Displacement":91,"Horsepower":53,"Weight_in_lbs":1795,"Acceleration":17.5,"Year":1976,"Horsepower":110,"Weight_in_lbs":3645,"Acceleration":16.2,"Year":"1976-01-01","Origin":"USA"},{"Name":"toyota corolla","Miles_per_Gallon":28,"Cylinders":4,"Displacement":97,"Horsepower":75,"Weight_in_lbs":2155,"Acceleration":17.5,"Cylinders":6,"Displacement":250,"Horsepower":110,"Weight_in_lbs":3520,"Acceleration":16.4,"Year":"1977-01-01","Origin":"USA"},{"Name":"pontiac grand prix lj","Miles_per_Gallon":19.9,"Cylinders":8,"Displacement":260,"Horsepower":110,"Weight_in_lbs":3365,"Acceleration":15.5,"Year":19,"Year":"1978-01-01","Origin":"USA"},{"Name":"datsun 200-sx","Miles_per_Gallon":23.9,"Cylinders":4,"Displacement":119,"Horsepower":97,"Weight_in_lbs":2405,"AccelHorsepower":71,"Weight_in_lbs":1925,"Acceleration":14,"Year":"1979-01-01","Origin":"Europe"},{"Name":"mercedes benz 300d","Miles_per_Gallon":25.4,"Cylinders":4,"Displacement":97,"Horsepower":78,"Weight_in_lbs":2188,"Acceleration":15.8,"Year":"1980-01-01","Origin":"Europe"},{"Name":"toyota corolla","Miles_per_Gallon":32.2,"Cylinders":4,"Displacement":108,"Horsepower":75,"Weight_in_lbs":2265,"Acceleration":15.2,"Year":"1980-01-01","Origin":"Japan"},{"Name":"vw rabbit c (diesel)","Miles_per_Gallon":44.3,"Cylinders":4,"Displacement":90,"Horsepower":48,"Weight_in_lbs":2085,"Acceleration":21.7,"Year":"1980-01-01","Origin":"Europe"},{"Name":"honda civic 1500 gl","Miles_per_Gallon":44.6,"Cylinders":4,"Displacement":91,"Horsepower":67,"Weight_in_lbs":1850,"Acceleration":13.8,"Year":"1980-01-01","Origin":"Japan"},{"Name":"datsun 280-zx","Miles_per_Gallon":32.7,"Cylinders":6,"Displacement":168,"Horsepower":132,"Weight_in_lbs":2910,"Acceleration":11.4,"Year":"1980-01-01","Origin":"Japan"},{"Name":"honda Accelerationord","Miles_per_Gallon":32.4,"Cylinders":4,"Displacement":107,"Horsepower":72,"Weight_in_lbs":2290,"Acceleration":17,"Year":"1980-01-01","Origin":"Japan"},{"Name":"chevrolet citation","Miles_per_Gallon":23.5,"Cylinders":6,"Displacement":173,"Horsepower":110,"Weight_in_lbs":2725,"Acceleration":12.6,"Year":"1982-01-01","Origin":"USA"},{"Name":"honda civic 1300","Miles_per_Gallon":35.1,"Cylinders":4,"Displacement":81,"Horsepower":60,"Weight_in_lbs":1760,"Acceleration":16.1,"Year":"1982-01-01","Origin":"Japan"},{"Name":"mazda glc 4","Miles_per_Gallon":34.1,"Cylinders":4,"Displacement":91,"Horsepower":68,"Weight_in_lbs":1985,"Acceleration":16,"Year":"1982-01-01","Origin":"Japan"},{"Name":"volkswagen jetta","Miles_per_Gallon":33,"Cylinders":4,"Displacement":105,"Horsepower":74,"Weight_in_lbs":2190,"Acceleration":14.2,"Year":"1982-01-01","Origin":"Europe"},{"Name":"datsun 200sx","Miles_per_Gallon":32.9,"Cylinders":4,"Displacement":119,"Horsepower":100,"Weight_in_lbs":2615,"Acceleration":14.8,"Year":"1982-01-01","Origin":"Japan"},{"Name":"volvo diesel","Miles_per_Gallon":30.7,"Cylinders":6,"Displacement":145,"Horsepower":76,"Weight_in_lbs":3160,"Acceleration":19.6,"Year":"1982-01-01","Origin":"Europe"},{"Name":"oldsmobile cutlass ls","Miles_per_Gallon":26.6,"Cylinders":8,"Displacement":350,"Horsepower":105,"Weight_in_lbs":3725,"Acceleration":19,"Year":"1982-01-01","Origin":"USA"},{"Name":"chevrolet cavalier wagon","Miles_per_Gallon":27,"Cylinders":4,"Displacement":112,"Horsepower":88,"Weight_in_lbs":2640,"Acceleration":18.6,"Year":"1982-01-01","Origin":"USA"},{"Name":"pontiac phoenix","Miles_per_Gallon":27,"Cylinders":4,"Displacement":151,"Horsepower":90,"Weight_in_lbs":2735,"Acceleration":18,"Year":"1982-01-01","Origin":"USA"},{"Name":"mazda glc custom l","Miles_per_Gallon":37,"Cylinders":4,"Displacement":91,"Horsepower":68,"Weight_in_lbs":2025,"Acceleration":18.2,"Year":"1982-01-01","Origin":"Japan"},{"Name":"nissan stanza xe","Miles_per_Gallon":36,"Cylinders":4,"Displacement":120,"Horsepower":88,"Weight_in_lbs":2160,"Acceleration":14.5,"Year":"1982-01-01","Origin":"Japan"},{"Name":"honda civic (auto)","Miles_per_Gallon":32,"Cylinders":4,"Displacement":91,"Horsepower":67,"Weight_in_lbs":1965,"Acceleration":15.7,"Year":"1982-01-01","Origin":"Japan"},{"Name":"chrysler lebaron medallion","Miles_per_Gallon":26,"Cylinders":4,"Displacement":156,"Horsepower":92,"Weight_in_lbs":2585,"Acceleration":14.5,"Year":"1982-01-01","Origin":"USA"},{"Name":"chevrolet camaro","Miles_per_Gallon":27,"Cylinders":4,"Displacement":151,"Horsepower":90,"Weight_in_lbs":2950,"Acceleration":17.3,"Year":"1982-01-01","Origin":"USA"},{"Name":"ford ranger","Miles_per_Gallon":28,"Cylinders":4,"Displacement":120,"Horsepower":79,"Weight_in_lbs":2625,"Acceleration":18.6,"Year":"1982-01-01","Origin":"USA"}]

