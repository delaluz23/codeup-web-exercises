//javascript function to alert when page loads
    // window.onload = (function (){
    //     alert("window has loaded")
    // })
//jquery function to alert when page loads
//you can use jQuery or $ to call jQuery
//     $(function (){
//         alert("window has loaded")
//     })
//targeting "id-container" id jquery
// $(() =>{
//     $('#id-container').css('background-color', 'red');
// })
//js equivalent
//     document.querySelector('#id-container').style.backgroundColor = 'red'
//targeting "title" class with jquery
// $(() =>{
//     $('.title').css('color', 'purple');
// })
//targeting "title" class with js
    let tittleElements = document.querySelector('.title');
    tittleElements.forEach(titleElement => {
        titleElement.style.color = 'blue';
    })
//use jQuery to select all li elements
    $(() => {
        $('li').css('color', 'pink');
    })
    //using jquery to check for a value