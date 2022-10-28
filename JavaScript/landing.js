const days = document.getElementById("days");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const currentYear =new Date().getFullYear();

const eventDate= new Date("Novmber 25 2022 00:00:00");

//update countdown
function updateCountdowntime(){

    const currentTime = new Date();
    const diff = eventDate - currentTime;

    const d=Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;
    // console.log(d);
    // console.log(h);
    // console.log(m);
    // console.log(s);

    days.innerHTML =d;
    hour.innerHTML = h<10? '0' + h: h;
    // hour.innerHTML =h;
    // min.innerHTML =m;
    min.innerHTML = m<10? '0' + m: m;
    sec.innerHTML = s<10? '0' + s: s;
    // sec.innerHTML =s;
}
setInterval(updateCountdowntime, 1000);
// updateCountdowntime();

// Navbar code
const menubar = document.querySelector(".menubar");
const navMenu = document.querySelector(".nav-menu");

menubar.addEventListener("click", ()=>{
    menubar.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    menubar.classList.remove("active");
    navMenu.classList.remove("active");
}))