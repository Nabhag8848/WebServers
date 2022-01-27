const request = require('request')

const geoCode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiZGV2ZWxvcGVydHdpdHRlciIsImEiOiJja3k2M3ppcTAwc2FsMnBwcXN0dzA5OHI3In0.KuPw6FbND3nSuG3sOZRBSQ'
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