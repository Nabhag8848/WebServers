const request = require('request')
require('dotenv').config()
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

const geoCode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +`.json?access_token=${ACCESS_TOKEN}`
    request({url, json:true}, (error,{body} = {}) => {
        
        if(error){
            callback('Cannot connect to Weather Service!! Try Again Enabling your Internet!')
        }else if(body.features.length === 0){
            callback('Cannot find Location please Search and Try Again!')
        }else{
            callback(undefined,{
                longitude:body.features[0].center[0],
                latitude: body.features[0].center[1],
                placename:body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode