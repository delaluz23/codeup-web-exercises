/////////////////////////////////////////////////////////////////////////////////////////
/*
Global Variables
 */
/////////////////////////////////////////////////////////////////////////////////////////
//blank variable to track city name inputed
let city_name;

// Base URL for forecast API
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
//users input for global location
let locationInputContainer = document.querySelector('#user-location')


//submit button
let submit_button = document.querySelector('#submit')


//targeting today's forecast
let todaysForcast = document.querySelector('.todays-forcast')


//targeting the body for interactive background
const body = document.querySelector('body')

//intitializing map
const map = initializeMap();

//marker
let marker = new mapboxgl.Marker({
    'color': "black",
    draggable: true
})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map)

//keeping track of markers lat and lon
let markerLatLng;


//control for map to zoom in/out and rotate
const navControl = new mapboxgl.NavigationControl();
map.addControl(navControl, 'top-right');

/////////////////////////////////////////////////////////////////////////////////////////
/*
Functions
 */
/////////////////////////////////////////////////////////////////////////////////////////

//getting open weather api
function getWeatherURL2(cityName) {
    return `${OPEN_WEATHER_URL}?q=${cityName}&appid=${OPEN_WEATHER_APPID}&units=imperial
`
}


//converting api dates to actual dates
function convertDateString(dateString) {
    let date = new Date(dateString);
    let formattedDate = `${date.toLocaleString('en-US', {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`;
    return formattedDate;
}

//displaying map
function initializeMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 10,
        center: [-98.4916, 29.4252],
    }
    return new mapboxgl.Map(mapOptions);
}


//might delete
// function dragMarkerLocation(){
//     marker.setLngLat([markerLatLng[0].lon, markerLatLng[0].lat])
//     map.flyTo([markerLatLng[0].lon, markerLatLng[0].lat])
//     city_name =
// }


//function to change background to todays weather
function todaysWeather (iconnum){
    if (iconnum === '01d') {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg')"
    }
    //few clouds bg
    else if (iconnum === '02d') {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg')"
    }
    //scattered clouds bg
    else if (iconnum === '03d') {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/8579644/pexels-photo-8579644.jpeg')"
    }
    //broken clouds bg
    else if (iconnum === '04d') {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/8996941/pexels-photo-8996941.jpeg')"
    }
    //shower rain bg
    else if (iconnum === '09d') {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/2838561/pexels-photo-2838561.jpeg')"
    }
    //rain bg
    else if (iconnum === '10d') {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg')"
    }
    //thunderstorm bg
    else if (iconnum === '11d') {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg')"
    }
    //snow bg
    else if (iconnum === '13d') {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/3462588/pexels-photo-3462588.jpeg')"
    }
    //mist bg
    else if (iconnum === '50d') {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/1743392/pexels-photo-1743392.jpeg')"
    }
    //fault bg
    else {
        body.style.backgroundColor = 'lightblue'
    }
}


/////////////////////////////////////////////////////////////////////////////////////////
/*
Events
 */
/////////////////////////////////////////////////////////////////////////////////////////

//tracking user input
locationInputContainer.addEventListener('keyup', () => {
    city_name = locationInputContainer.value.toLowerCase()
    console.log(city_name);
})

//Submit event listener to pass in user input to api
submit_button.addEventListener('click', fetchData);

// Add event listener for Enter key press
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        fetchData();
    }
});

//marker with tracking
marker.on('dragend', function () {
     markerLatLng = [{
        lat: marker.getLngLat().lat,
        lng: marker.getLngLat().lng
    }]
    console.log(markerLatLng)
    return markerLatLng;
})



/////////////////////////////////////////////////////////////////////////////////////////
/*
API CALLS
 */

/////////////////////////////////////////////////////////////////////////////////////////


function fetchData() {
    let URL = getWeatherURL2(city_name);
    console.log(URL);
    $.ajax(URL)
        .done(data => {
            console.log(data);
            let dayOneImg = (`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`)
            let dayTwoImg = (`https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`)
            let dayThreeImg = (`https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`)
            let dayFourImg = (`https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`)
            let dayFiveImg = (`https://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png`)
            //inputing five-day forecast
            todaysForcast.innerHTML = `
                <div class="container ">
                     <div class="row">
                            <h1 class="d-flex justify-content-center">${data.city.name}</h1>
                         <div class="col card pl-2 d-flex justify-content-center">
                            <p>${convertDateString(data.list[0].dt_txt)}</p>
                            <p>High: ${Math.floor(data.list[0].main.temp_max)}</p>
                            <p>Low: ${Math.floor(data.list[0].main.temp_min)}</p>
                            <img class="icons" src="${dayOneImg}"> 
                         </div>
                         <div class="col card pl-2 d-flex justify-content-center">
                            <p class="">${convertDateString(data.list[8].dt_txt)}</p>
                            <p class="">High: ${Math.floor(data.list[8].main.temp_max)}</p>
                            <p class="">Low: ${Math.floor(data.list[8].main.temp_min)}</p>
                            <img class="icons" src="${dayTwoImg}">
                         </div>
                         <div class="col card pl-2 d-flex justify-content-center">
                            <p class="">${convertDateString(data.list[16].dt_txt)}</p>
                            <p class="">High: ${Math.floor(data.list[16].main.temp_max)}</p>
                            <p class="">Low: ${Math.floor(data.list[16].main.temp_min)}</p>
                            <img class="icons" src="${dayThreeImg}">
                         </div>
                         <div class="col card pl-2 d-flex justify-content-center">
                            <p class="">${convertDateString(data.list[24].dt_txt)}</p>
                            <p class="">High: ${Math.floor(data.list[24].main.temp_max)}</p>
                            <p class="">Low: ${Math.floor(data.list[24].main.temp_min)}</p>
                            <img class="icons" src="${dayFourImg}">
                         </div>
                         <div class="col card pl-2 d-flex justify-content-center">
                            <p class="">${convertDateString(data.list[32].dt_txt)}</p>
                            <p class="">High: ${Math.floor(data.list[32].main.temp_max)}</p>
                            <p class="">Low: ${Math.floor(data.list[32].main.temp_min)}</p>
                            <img class="icons" src="${dayFiveImg}">
                         </div>
                     </div>
                </div>
            `;
            //dynamic background to match todays weather
            todaysWeather(data.list[0].weather[0].icon);
            // changing map to location
            let lat = data.city.coord.lat
            let lon = data.city.coord.lon
            console.log(lat, lon)
            map.flyTo({
                center: [lon, lat],
            })
            marker.setLngLat([lon, lat])
        })
        .fail(
            todaysForcast.innerHTML = `
            <div class="d-flex justify-content-center align-items-center">
                <h1>That is not a city</h1>
            </div>
            `
        );
}









