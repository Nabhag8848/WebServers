const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const port = process.env.PORT || 3000

const app = express()

const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title:'Home',
        name:'Nabhag Motivaras'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Nabhag Motivaras'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        message:'We Grow by Lifting others!!',
        title:'Help',
        name:'Nabhag Motivaras'
    })
})


app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error:'You must Provide address to render forecast'
        })
    }

    geoCode(req.query.address, (error,{longitude,latitude,placename} = {}) => {

        if(error){
            return res.send({
                error 
            })
        }
  
      forecast(longitude,latitude, (error, forecastData) => {
  
          if(error){
              return res.send({
                  error
              })
          }
          
          res.send({
            forecast:forecastData,
            location:placename
          })
      })
    })

    
})

// app.get('/products',(req,res)=>{
    
//     if(!req.query.search){
//         return res.send({
//             error:'You must provide search term'
//         })
//     }

//     res.send({
//         products:[]
//     })
// })

app.get('/help/*',(req,res)=>{
    res.render('error',{
        errorMessage:'Help Page Not Found!'
    })
})

app.get('*',(req,res)=>{
    res.render('error',{
        errorMessage: '404 Page not Found!'
    })
})


app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})