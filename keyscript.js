//Below I called the three Ids to start an event//
const keyDisplay = document.getElementById('keyDisplay');
const codeDisplay = document.getElementById('codeDisplay');
const whichDisplay = document.getElementById('whichDisplay');
//Created an event listener to display requested specifics when the user presses a key. This will look at the specific key pressed then use the function to locate the appropiate details.
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const code = event.code;
    const which = event.which;
//The last three lines will display the requested infomation- the key, code and which. These will inform the user the appropiate termoligy for the key that has been pressed//
    keyDisplay.textContent = `Key: ${key}`;
    codeDisplay.textContent = `Code: ${code}`;
    whichDisplay.textContent = `Which: ${which}`;
});
