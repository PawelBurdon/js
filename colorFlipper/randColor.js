const x = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];

const btn = document.getElementById("button");
const color = document.getElementById("color");
const main = document.getElementById("main");


btn.addEventListener('click', () => {

    let hexColor = '#';

    for(let i = 0; i < 6; i++){
        hexColor += x[getRandNumber()];
    }

    main.style.backgroundColor = hexColor;
    color.textContent = hexColor;

})

const getRandNumber = () =>{
    return Math.floor(Math.random() * x.length);
}
// 