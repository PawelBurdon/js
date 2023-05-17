const colors = ['green', 'red', 'blue', 'yellow', 'orange'];

const btn = document.getElementById("button");
const color = document.getElementById("color");
const main = document.getElementById("main");

btn.addEventListener('click', () => {

    const randNumber = getRandNumber();

    main.style.backgroundColor = colors[randNumber];
    color.textContent = colors[randNumber];
})

const getRandNumber = () =>{
    return Math.floor(Math.random() * colors.length);
}