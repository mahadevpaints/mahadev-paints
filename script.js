// Smooth appearance animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});

// Navbar shadow while scrolling

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.15)";

}else{

navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});
