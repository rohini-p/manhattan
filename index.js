'use strict';

/**
 * @param {lat_1} number
 * @param {lng_1} number
 * @param {lat_2} number
 * @param {lng_2} number
 * @return {string}
 */

 /**"start": "node ./index.js"*/
module.exports = function(lat_1, lng_1,lat_2,lng_2) {
    var R = 6371; 
    var  x1 = lat_2-lat_1
    var dLat = x1 * Math.PI / 180
    var x2 = lng_2-lng_1
    var dLon = x2 * Math.PI / 180
    var latitude_distance_a =  Math.sin(dLat/2) * Math.sin(dLat/2)  
    var latitude_distance_b = 2 * Math.atan2(Math.sqrt(latitude_distance_a), Math.sqrt(1-latitude_distance_a))
    var latitude_distance =  R * latitude_distance_b
    var longitude_distance_a =    Math.sin(dLon/2) * Math.sin(dLon/2)
    var longitude_distance_b = 2 * Math.atan2(Math.sqrt(longitude_distance_a), Math.sqrt(1-longitude_distance_a))
    var longitude_distance =  R * longitude_distance_b
    var dist_output = ( (Math.abs(latitude_distance ) + Math.abs(longitude_distance)) )  
    return ( dist_output.toFixed(2) + 'KM' ) 
};