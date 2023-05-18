const x = document.getElementById("count");
const y = document.getElementById("reset");
const show = document.getElementById("value")

let z = 0;

x.addEventListener('click', ()=>{
    z++;
    show.textContent = z;
})

y.addEventListener('click', ()=>{
    z = 0;
    show.textContent = z;
})