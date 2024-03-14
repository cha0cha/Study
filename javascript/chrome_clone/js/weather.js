function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
}
function onGeoError(){
    alert("Can't find you. No Weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//getCurrentPosition -> 파라미터 두개(true, false) /true -> 위치를 받음