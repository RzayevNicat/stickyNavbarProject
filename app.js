const navEl = document.querySelector(".nav");
const bottomContainerEl = document.querySelector(".about")


window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomContainerEl.offsetTop - navEl.offsetHeight - 50){
        navEl.classList.add("active")
    }
    else{
        navEl.classList.remove("active")
    }
})