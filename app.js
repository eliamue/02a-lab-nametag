//change name
const nameInput = document.getElementById('name');
const nButton = document.getElementById('nameButton');
const nameDisplay = document.getElementById('ndisplay');
    nButton.addEventListener('click', () => {
        nameDisplay.textContent = nameInput.value
});
//change pronouns
const pronounInput = document.getElementById('pronouns');
const pronounButton = document.getElementById('pronounButton');
const pronounDisplay = document.getElementById('pdisplay');
    pronounButton.addEventListener('click', () => {
        pronounDisplay.textContent = pronounInput.value
});
//color buttons
//rust

//rustButton.addEventListener('click', rusty);
//function rusty() {
 //   document.getElementsByClassName("nametag").style.backgroundColor = "sienna"
//};
//rose

//roseButton.addEventListener('click', rosey);
//function rosey() {
//    document.getElementsByClassName("nametag").style.backgroundColor = "rosybrown"
//};
//moss
//roseButton.addEventListener('click', mossy);
//function mossy() {
//    document.getElementsByClassName("nametag").style.backgroundColor = "olivedrab"
//};
var roButton = document.querySelector("rose-button");
roButton.addEventListener("click", function() {
    const curColour = document.getElementsByClassName("nametag").style.backgroundColor;

    document.getElementsByClassName("nametag").style.backgroundColor = curColour === 'red' ? 'rosybrown' : 'red' ;
});

var ruButton = document.querySelector("rust-button");
ruButton.addEventListener("click", function() {
    const curColour = document.getElementsByClassName("nametag").style.backgroundColor;

    document.getElementsByClassName("nametag").style.backgroundColor = curColour === 'red' ? 'sienna' : 'red' ;
});

var mButton = document.querySelector("moss-button");
mButton.addEventListener("click", function() {
    const curColour = document.getElementsByClassName("nametag").style.backgroundColor;

    document.getElementsByClassName("nametag").style.backgroundColor = curColour === 'red' ? 'olivedrab' : 'red' ;
});