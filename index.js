const mongoose = require('mongoose');
const TourRoutes = require('./routes/tourRoutes')
const express = require('express')
const app = express();

app.use('/tour',TourRoutes)


var mongoDB = 'mongodb://127.0.0.1/natours-test';
mongoose.connect(mongoDB,{
    useNewUrlPaser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con =>{
    console.log(con.connections);
    console.log('DB connections successful!');
})
var db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'))

app.listen(3000)


// const testTour = new Tour({
//     hackernews:	"Neural programmer better than Quicksort",
//     name: "nl",
//     points:158,
//     comments:66,
//     time:Date.now(),
//     link:"arxiv.org" 
// });

// testTour.save().then(doc => {
//     console.log(doc);
// }).catch(err => {
//     console.log('Error:',err)
// })

