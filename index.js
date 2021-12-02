
const images = [
    {
    id: 1,
    title: 'yin and yang',
    img: 'images/yinYang.jpg'
},
{
    id: 2,
    title: 'mobius strip',
    img: 'images/mobiusStrip.jpg'
},
{
    id: 3,
    title: 'refracted light',
    img: 'images/refractedLight.png'
},
{
    id: 4,
    title: 'ordo ab chao',
    img: 'images/ordoAbChao.gif'
},
{
    id: 5,
    title: 'dr strangelove',
    img: 'images/FOaB.gif'
},
{
    id: 6,
    title: 'EARTH!',
    img: 'images/blueMarble.jpg'
},
]

const activeImage = document.querySelector('#picture')
const imageName = document.querySelector("#imageName")
const count = document.querySelector('.count')

const nextBtn = document.querySelector('.nextOne')
const prevBtn = document.querySelector('.lastOne')


let show = 0

var counter = 1

//load initial item

window.addEventListener('DOMContentLoaded', function(){
    showPerson()
    console.log(counter)
})

//show person based on item

function showPerson(){
    // var item = images[person]
    imageName.innerText = images[show].title
    activeImage.src = images[show].img
    // console.log(item.img)
}

//prev and next buttons

nextBtn.addEventListener('click', function(){
    if (show == 5){
        show = 5
    } else {
        show ++
    }
    counter = show + 1
    console.log(counter)
    count.innerText = counter + '/6'
    showPerson()
})

prevBtn.addEventListener('click', function(){
    if (show == 0){
        show == 0
    } else {
        show --
    }

    if(counter == 1){
        counter = 1
    } else {
        counter --
    }
    
    count.innerText = counter + '/6'

    showPerson()
})