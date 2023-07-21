const getPerson = (id) => {

    const url = `https://swapi.dev/api/people/${id}/`
    const options = {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .catch((error) =>{
            console.log(error)
        })
};

const getFilm = (url) => {
    const urlFilm = url
    const options = {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    }
    return fetch(urlFilm, options)
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log(error)
        })
}




(() => {

    getPerson(2).then((person) => {
        console.log(person);
        getFilm(person.films[0]).then((film) =>{
            console.log(film)
        });
    });


})();