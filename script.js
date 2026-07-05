// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}, 800);

});

// ===========================
// DARK MODE
// ===========================

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

darkBtn.innerHTML="☀️";

}else{

darkBtn.innerHTML="🌙";

}

});

// ===========================
// MOBILE MENU
// ===========================

const menuIcon=document.getElementById("menuIcon");

const navLinks=document.querySelector(".nav-links");

menuIcon.addEventListener("click",()=>{

if(navLinks.style.display==="flex"){

navLinks.style.display="none";

}else{

navLinks.style.display="flex";

navLinks.style.flexDirection="column";

}

});

// ===========================
// BACK TO TOP
// ===========================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===========================
// SEARCH
// ===========================

const search=document.getElementById("search");

const cards=document.querySelectorAll(".card");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

// ===========================
// SCROLL ANIMATION
// ===========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.feature-card,.about-card,.category,.testimonial,.stat").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="0.7s";

observer.observe(el);

});

// ===========================
// STATS COUNTER
// ===========================

const counters=document.querySelectorAll(".stat h2");

const speed=80;

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

let count=parseInt(counter.getAttribute("data-count"))||0;

const inc=Math.ceil(target/speed);

if(count<target){

count+=inc;

counter.setAttribute("data-count",count);

counter.innerText=count+"+";

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

};

update();

});

// ===========================
// NEWSLETTER
// ===========================

const form=document.querySelector(".newsletter form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Thank you for subscribing!");

form.reset();

});

}