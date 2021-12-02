
const images = [
    {
    id: 1,
    name: 'yin and yang',
    image: 'images/yinYang.jpg'
},
{
    id: 2,
    name: 'mobius strip',
    image: 'images/mobiusStrip.jpg'
},
{
    id: 2,
    name: 'refracted light',
    image: 'images/refractedLight.jpg'
},
]

const activeImage = document.querySelector('#picture')
const imageName = document.querySelector("#imageName")

const nextBtn = document.querySelector('#nextButton')
const prevBtn = document.querySelector('#prevButton')


let show = 1

//load initial item

window.addEventListener('DOMContentLoaded', function(){
    var item = images[show]
    imageName.innerText = item.name
    activeImage.src = item.image

})

nextBtn.addEventListener("click", function(){
    show = 1
})

