const path = require('path')
const express = require('express')
const hbs = require('hbs')

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
    res.send({
        degree:50,
        location:'Gujarat'
    })
})

app.listen(3000,()=>{
    console.log('Server is Up!!')
})