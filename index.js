
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
    id: 3,
    name: 'refracted light',
    image: 'images/refractedLight.png'
},
]

const activeImage = document.querySelector('#picture')
const imageName = document.querySelector("#imageName")

const nextBtn = document.querySelector('#nextButton')
const prevBtn = document.querySelector('#prevButton')


let show = 2

//load initial item

window.addEventListener('DOMContentLoaded', function(){
    showPerson(show)

})

//show person based on item

function showPerson(person){
    const item = images[person]
    imageName.innerText = item.name
    activeImage.src = item.image
}

//prev and next buttons

nextBtn.addEventListener('click', function(){
    console.log('yopyo')
    show++
    showPerson()
})

