let inp = document.querySelector ('.input')
let btn = document.querySelector ('.btn')
let par = document.querySelector ('.par')
let audio = document.querySelector('.audio')
let audio1 =document.querySelector('.audio1')


let arr = ["istanbul", "Praqa", "Paris", "Roma", "London"]

let random = Math.floor(Math.random()* arr.length)
let randomName = arr[random]
console.log(randomName);

btn.addEventListener('click', function(){

    if(randomName === inp.value){
        par.textContent = "Hazirlas :) "
        audio.play()
        par.classList.add('animate')
    
    }else{ par.textContent = "Bir daha yoxla!"
        audio1.play()
        par.classList.add('wrong'); }})
