
//getting user location 
export let facility=''
const successCallback=(position)=>{
    const {latitude, longitude}= position.coords;
    facility=`${latitude},${longitude}`
    return facility
}

let message=''
const errorCallback=(error)=>{
    if(error.message.includes("denied")){
        message='Please, Turn on your device location'
        alert(message)
    }else{
        message=`No internet`
        alert(message)
    }
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
     