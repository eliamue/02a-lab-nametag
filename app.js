const nameInput = document.getElementById('name');
const nButton = document.getElementById('nameButton');
const nameDisplay = document.getElementById('ndisplay');

nButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value
});

const pronounInput = document.getElementById('pronouns');
const pronounButton = document.getElementById('pronounButton');
const pronounDisplay = document.getElementById('pdisplay');
    pronounButton.addEventListener('click', () => {
        pronounDisplay.textContent = pronounInput.value
});