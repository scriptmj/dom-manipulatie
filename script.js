var myName = "MJ";
var colours = ['Red', 'Blue', 'Teal', 'Yellow', 'Green'];

function changeElement(){
    let randomColour = colours[Math.floor(Math.random()*colours.length)];
    document.getElementById("element").style.color = randomColour;
    document.getElementById("element").innerText = 'Hi ' + myName + '!';
}