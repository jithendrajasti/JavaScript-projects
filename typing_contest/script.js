const sourceText = document.getElementById('source').innerText;
const output = document.getElementById('output');
let userTyped = '';
let index = 0;

document.addEventListener('keydown', function (e) {
    if (e.key.length === 1) { // only letters, symbols, etc. (ignore Shift, Tab, etc.)
        userTyped += e.key;
        if (e.key === sourceText[index]) {
            output.innerHTML += `<span>${e.key}</span>`;
        } else {
            output.innerHTML += `<span class="error">${e.key}</span>`;
        }
        index++;
    } else if (e.key === "Backspace") {
        userTyped = userTyped.slice(0, -1);
        index = Math.max(0, index - 1);
        output.innerHTML = '';
        for (let i = 0; i < index; i++) {
            const charClass = userTyped[i] === sourceText[i] ? '' : 'error';
            output.innerHTML += `<span class="${charClass}">${userTyped[i]}</span>`;
        }
    }
    if (userTyped === sourceText) {
        setTimeout(()=>{
            alert('🎉 Congratulations! You typed it correctly!');
        },10);
        //this will block alert for 10 ms and let Ui work happens in browser;
        }
})