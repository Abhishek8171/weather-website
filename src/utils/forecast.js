const request  =  require('request')

const forecast =(latitude,longitude,callback)=>{

const url='http://api.weatherstack.com/current?access_key=424c17dd2a4dd6c0e549246fdf56725c&query=' + latitude + ',' + longitude + '&units=m'

request({url,json:true},(error,{body})=>{

 if(error)
 {callback('There is an Error',undefined)}
else if(body.error)
{

callback('Something went wrong !',undefined)

}

else{

    callback(undefined,'Current temperature is '+body.current .temperature +' ' + ' Celicius but it is feel like '+body.current.feelslike +' '+'Celcius')
    
}



}
     )

}




module.exports=forecast