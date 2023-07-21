const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//1
const filterLanguages = users.filter(devs => {
    return devs.languages.length >= 3
})
console.log('devs that know more than three languages', filterLanguages)

//2

const devsEmails = users.map(devs => {
    return devs.email
})
console.log('all devs emails', devsEmails)

//3

const totalYearsExperience = users.reduce((accumulator, devs, index) => {
        return accumulator += parseFloat(devs.yearsOfExperience);
    }
    , 0)
console.log('total years of experience', totalYearsExperience);

//4

const totalYearsExperienceAverage = users.reduce((accumulator, devs, index) => {
        accumulator += devs.yearsOfExperience
        if (users.length - 1 === index) {
            accumulator = accumulator / users.length
        }
        return accumulator;
    }
    , 0)
console.log('average years of experience', totalYearsExperienceAverage);

//5

const longestDevEmail = devsEmails.reduce((accumulator, email, index) => {
    if (accumulator < email.length) {
        accumulator = email
    }
    return accumulator;
}, devsEmails[0].length)
console.log('longest email is', longestDevEmail)

// //walkthrough
// const longestEmail = users.reduce((accumulator, user, index) =>{
//     const emailLength =  user.email.length;
//     const accLength = accumulator.length;
//     if (emailLength > accLength){
//     accumulator = user.email;
//     }
//     return accumulator
// },'')
// console.log('walkthrough return longest email', longestEmail)

//6

// const devsNames = users.reduce((accumulator, devname, index) => {
//
//     return `${accumulator += devname.name} `
// }, '')
// console.log('all devs names:', devsNames)

//walkthrough
const usernames = users.reduce((accumulator, user, index) => {
    if (index === (users.length - 1)){
        accumulator += `and ${user.name}.`
    } else if (index === (users.length -2)){
        accumulator += ''
    }
    else {
        accumulator += `${user.name}, `
    }
    return accumulator
}, 'Your instructors are: ')
console.log(usernames)

//bonus

const languagesKnown = users.reduce((accumulator, index) => {
    const language = index.languages;
    language.forEach((lang) => {
        accumulator.add(lang)
    })
    return accumulator
}, new set())
console.log(languagesKnown)
