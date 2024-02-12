const header = document.querySelector("#header")
const image = document.querySelector("#image")
const credit = document.querySelector("#credit")

document.querySelector("#chanterelle-button").addEventListener("click",function(){
    header.innerHTML = "Pink Dragon baby"
    image.src = "dragon.jpeg"
    credit.innerHTML = "@mypicture"
})

document.querySelector("#oyster-button").addEventListener("click",function(){
    header.innerHTML = "Cloud Rainbow"
    image.src = "cloudbaby.png"
    credit.innerHTML = "@hohoho"
})

document.querySelector("#fly-agaric-button").addEventListener("click",function(){
    header.innerHTML = "Google"
    image.src = "Google.png"
    credit.innerHTML = "@Google"
})
