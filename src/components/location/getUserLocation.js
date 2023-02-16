
//getting user location 
export let location=''
const successCallback=(position)=>{
    const {latitude, longitude}= position.coords;
    location=`${latitude},${longitude}`
    return location
}

let message=''
const errorCallback=(error)=>{
    if(error.message.includes("denied")){
        message='Please, Turn on your device location'
        setTimeout(()=>{
            window.confirm(message)
        },5000)
    }else{
        message=`No internet`
       setTimeout(()=>{
            alert(message)
       },10000)
    }
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
     