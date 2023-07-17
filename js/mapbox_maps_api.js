$(() => {
    

///////////////////////////////////////////////////////////////////////////////////
// Global Variables
///////////////////////////////////////////////////////////////////////////////////
    const map = initializeMap();
    const favRestaurantButton = document.querySelector('#fav-restaurant-button');
    const favRestaurantsButton = document.querySelector('#fav-restaurants-button');
    const markers = [];
    const favRestaurants = [
        {
            name: 'Buca di Beppo',
            address: '659 US 31 S, Greenwood, IN 46142',
        },
        {
            name: 'Yokohama',
            address: '67 N Madison Ave, Greenwood, IN 46142',
        },
        {
            name: 'Ale Emporium',
            address: '997 E County Line Rd B, Greenwood, IN 46143',
        },
    ];
    
    

///////////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////////
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


    // Function that centers the map on the city with my 
    // favorite restaurant
    function showFavRestaurantCity() {
        geocode('Indianapolis, Indiana', MAPBOX_TOKEN)
            .then((data) => {
                console.log(data);
                map.setCenter(data)
                    .setZoom(9);
            })
    }
    
    // Function that centers the map on my favorite restaurant
    // Zoom in
    // Create marker
    function showFavRestaurant(favRestaurant) {
        geocode(favRestaurant.address, MAPBOX_TOKEN)
            .then((data) => {
                console.log(data);
                map.setCenter(data)
                    .setZoom(15);
                const marker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map);
                const popup = new mapboxgl.Popup()
                    .setHTML(favRestaurant.name);
                marker.setPopup(popup);
                markers.push(marker);
            })
    }
    
    
    // Function that shows the same thing as above but with 
    // all the restaurants in my fav restaurants array
    function showFavRestaurants() {
        favRestaurants.forEach((favRestaurant) => {
            showFavRestaurant(favRestaurant);
        })
    }
    
    

///////////////////////////////////////////////////////////////////////////////////
// Events
///////////////////////////////////////////////////////////////////////////////////

    favRestaurantButton.addEventListener('click', () => showFavRestaurant(
        { 
            address: '67 N Madison Ave, Greenwood, IN 46142', 
            name: 'Yokohama'
        }
    ));
    favRestaurantsButton.addEventListener('click', showFavRestaurants);
    
    

///////////////////////////////////////////////////////////////////////////////////
// Run When App Loads
///////////////////////////////////////////////////////////////////////////////////

    showFavRestaurantCity();






























})