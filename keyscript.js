const keyDisplay = document.getElementById('keyDisplay');
const codeDisplay = document.getElementById('codeDisplay');
const whichDisplay = document.getElementById('whichDisplay');

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const code = event.code;
    const which = event.which;

    keyDisplay.textContent = `Key: ${key}`;
    codeDisplay.textContent = `Code: ${code}`;
    whichDisplay.textContent = `Which: ${which}`;
});
