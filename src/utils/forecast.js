const request = require('request')

const forecast = (longitude, latitude, callback) =>{
    const url = 'https://api.weatherapi.com/v1/current.json?key=934151fed33d42c99b485037220201&q='+ latitude + ',' + longitude
    request({url,json:true},(error,response)=>{
        
        if(error){
            callback('Cannot connect to Weather Service!! Try Again Enabling your Internet!')
        }else if(response.body.length === 0){
            callback('Cannot find Location please Search and Try Again!')
        }else{
            const current = response.body.current
            const data = 'Its' + ' ' +  current.condition.text + ', ' + current.temp_c + ' Degree Celsius'
            callback(undefined,data)
        }
    })
}

module.exports = forecast