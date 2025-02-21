const heading = document.getElementsByTagName('h1')
for (const h1 of heading){
console.log(h1.innerText)
}

const listItems = document.getElementsByTagName('li')
for(const li of listItems){
    console.log(li.innerText)
}

const fruits = document.getElementsByClassName('fruits')
for(const li of fruits){
    console.log(li.innerText)

}


const places = document.querySelector('.places')
console.log(places.innerText)



const places2 = document.querySelectorAll('.places')
    for (const pl of places2){
       console.log(pl.innerText) 
    }
