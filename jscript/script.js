const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.getElementById('mode-status');
const modeImage = document.getElementById('modeImage');

//function for changing to dark mode and greeting and cat

function toggleMode() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')){
        modeStatus.textContent="Good Morning!";
        modeImage.src ="images/cat1.gif";
    }else{
        modeStatus.textContent="Good Evening!";
        modeImage.src ="images/cat3.gif";
    }
}
//call the function
modeToggle.addEventListener('click', toggleMode);
//start out with light mode
body.classList.add('light-mode');
