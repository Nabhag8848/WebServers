const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')


app.set('view engine','hbs')
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        object:'This is Dynamic'
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
        message:'We Grow by Lifting others!!'
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