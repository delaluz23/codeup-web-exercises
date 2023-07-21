// const getPerson = (id) => {
//
//     const url = `https://swapi.dev/api/people/${id}/`
//     const options = {
//         method: 'GET',
//         headers: {
//             "content-type": "application/json"
//         }
//     }
//     return fetch(url, options)
//         .then((response) => {
//             return response.json();
//         })
//         .catch((error) =>{
//             console.log(error)
//         })
// };
//
// const getFilm = (url) => {
//     const urlFilm = url
//     const options = {
//         method: 'GET',
//         headers: {
//             "content-type": "application/json"
//         }
//     }
//     return fetch(urlFilm, options)
//         .then((response) => {
//             return response.json();
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }

//using async
const getPerson = async (id) => {
    try {
        const url = `https://swapi.dev/api/people/${id}/`
        const options = {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        }
        const response = await fetch(url, options);
        const person = await response.json();
        return person
    } catch(error) {
        console.log(error)
    }}

const getFilms = async (id) => {
    try{
        const url = `https://swapi.dev/api/people/${id}/`
        const options = {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        }
        const response = await  fetch()
    }catch (error){
        console.log(error)
    }
}

    //async before parameter in arrow functions!
    (async () => {
        const person = await getPerson(1)
        console.log(person)

        // getPerson(2).then((person) => {
        //     console.log(person);
        //     getFilm(person.films[0]).then((film) =>{
        //         console.log(film)
        //     });
        // });


    })();