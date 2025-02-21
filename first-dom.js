// const heading = document.getElementsByTagName('h1')
// for (const h1 of heading){
// console.log(h1.innerText)
// }

// const listItems = document.getElementsByTagName('li')
// for(const li of listItems){
//     console.log(li.innerText)
// }

// const fruits = document.getElementsByClassName('fruits')
// for(const li of fruits){
//     console.log(li.innerText)

// }


// const places = document.querySelector('.places')
// console.log(places.innerText)



// const places2 = document.querySelectorAll('.places')
//     for (const pl of places2){
//        console.log(pl.innerText) 
//  
// 
//  document.getElementById('sha').innerText = 'dont my friends'
//  document.getElementById('sha').style.color= 'red'
//  document.getElementById('sha').style.backgroundColor ='yellow'
//  document.getElementById('sha').style.textAlign= 'center'
//  document.getElementById('sha').style.padding = '40px  40px'
//  document.getElementById('sha').style.borderRadius = '50px'



// const sections = document.querySelectorAll('section')
// for(const section of sections){
//     section.style.border = "2px solid"
//     section.style.marginBottom = '10px'
//     section.style.paddingLeft ='20px'

    
// }
//    const section1 = document.querySelector('.section3')
//    section1.classList.add('color-bg')
//    section1.classList.remove('color-bg')
   

// const ul = document.getElementById('items-name')
// console.log(ul)

// const li1 = document.createElement('li')
// li1.innerText = 'kasem'
// ul.appendChild(li1);
// const li2 = document.createElement('li')
// li2.innerText = 'HASEM'
// ul.appendChild(li2);
// const li3 = document.createElement('li')
// li3.innerText = 'KAWSAR'
// ul.appendChild(li3);


const main = document.getElementById('main-01')
console.log(main)

const h1 = document.createElement('h1')
h1.innerText= ' hi i am shakib leaener a webdevelopment'
main.appendChild(h1)
const ul = document.createElement('ul')
main.appendChild(ul)

const li = document.createElement('li')
li.innerText = 'first html'
ul.appendChild(li)

const li2 = document.createElement('li')
li2.innerText = 'second css'
ul.appendChild(li2)
const li3 = document.createElement('li')
li3.innerText = 'third tailwind '
ul.appendChild(li3)
const li4 = document.createElement('li')
li4.innerText = 'fourth javascript'
ul.appendChild(li4)
