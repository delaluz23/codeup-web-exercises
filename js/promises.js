//targeting html
let inputcontainer = document.querySelector('#name')
let name;
let submitBTN = document.querySelector('#submitBTN')
let username;

inputcontainer.addEventListener('keyup', () => {
    name = inputcontainer.value
})

submitBTN.addEventListener('click', async () => {
    username = ''
    username = name;
    await githubUsername(username);
    console.log(username)
})


// const githubUsername = (gitusername) => {
//     const url = `https://api.github.com/users/${gitusername}/events`
//     const options = {
//         method: 'GET',
//         headers: {
//             'Authorization': `token ${promisesGitHubToken}`
//         }
//     }
//     return fetch(url, options)
//         .then(response => { return response.json()})
//         .then(events =>{
//             // console.log(events)
//             return events
//         })
//         .then(getevents => {
//             let events = getevents.filter(event => {
//                 return event.type === 'PushEvent'
//             })
//             return events
//         })
//         .then(oneevent => {
//             console.log('last commit: ',oneevent[0].created_at)
//             return oneevent[0].created_at
//         })
// }


const githubUsername = async (gitusername) => {
    try {
        const url = `https://api.github.com/users/${gitusername}/events`
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `token ${promisesGitHubToken}`
            }
        }
        const response = await fetch(url, options);
        const events = await response.json();
        const getevents = await events.filter(event => {
            return event.type === 'PushEvent'
        })
        const event = await getevents[0].created_at
        console.log(event)
        return event;
    }
catch (error)
{
    console.log(error)
}}







