const triger = document.getElementById('mobilemenu')
const body = document.querySelector('body')
const header = document.querySelector('header')
const nav = document.querySelector('nav')


triger.addEventListener("click", ()=>{
    body.classList.toggle('active')
    header.classList.toggle('active')
    nav.classList.toggle('active')
})