//const anime  = require('animejs');

console.log('Hello World');

var button = document.getElementById('btn');
button.onclick = clickButton;



function clickButton()
{
    console.log("Function called!")
    var inputName = document.getElementById('nameInput').value;
    var message = "Hey there, " + inputName + "!";
    // Update value
    console.log(message);
    document.getElementById('msg').innerHTML = message;
    document.getElementById("main").scrollIntoView({behavior: 'smooth'})
    //anime({});
}    