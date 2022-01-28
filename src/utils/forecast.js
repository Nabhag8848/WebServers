const request = require('request')
require('dotenv').config()

const KEY = process.env.KEY

const forecast = (longitude, latitude, callback) =>{
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=`+ latitude + ',' + longitude
    request({url,json:true},(error,{body} = {})=>{
        
        if(error){
            callback('Cannot connect to Weather Service!! Try Again Enabling your Internet!')
        }else if(body.length === 0){
            callback('Cannot find Location please Search and Try Again!')
        }else{
            const current = body.current
            const data = 'Its' + ' ' +  current.condition.text + ', ' + current.temp_c + ' Degree Celsius'
            callback(undefined,data)
        }
    })
}

module.exports = forecast