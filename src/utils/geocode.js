const request = require('request')

const geocode= (address,callback) =>
{

    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWJoaXNoZWs4MTcxIiwiYSI6ImNrZm05b253ODA1MGYzMm1leDFuNXdidHgifQ.splkoTQPUY0sFs2eHhGPgQ'

request({url,json:true},(error,{body})=>
    {

         if(error)
           {

             callback('This is an Error',undefined||{})

            }

          else if(body.features.length === 0)
          {
          callback('You are doing something wrong',undefined ||{})

          }
       
           else
           {
             callback(undefined,{

             latitude :body.features[0].center[1],

             longitude : body.features[0].center[0]
                
             

             })

           }





    })

}
module.exports=geocode