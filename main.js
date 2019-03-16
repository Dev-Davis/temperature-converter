


const determineConverter = () => {
    //write function to convertBtn
    const input = document.getElementById('tempInput');
    const celsius = document.getElementById('celsius');
    const fahrenheit = document.getElementById('fahrenheit');
    const output = document.getElementById('outputTemp');
    console.log('Hi Mom');
}

const buttonEvents = () => {
    const convert = document.getElementById('convertBtn');
    convert.addEventListener('click', determineConverter)
}

init = () => {
    buttonEvents();
};
init();
