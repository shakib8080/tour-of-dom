// // getElementsByTagName
// const heading = document.getElementsByTagName("h1");
// for (const h1 of heading) {
//   console.log(h1.innerText);
// }

// // getElementsByClassName
// const fruits = document.getElementsByClassName("fruits");
// for (const li of fruits) {
//   console.log(li.innerText);
// }
// // getElementByID
// const fruit = document.getElementById("idname");
// console.log(fruit);

// // querySelector
// const places = document.querySelector(".places");
// console.log(places.innerText);

// // querySelectorAll
// const places2 = document.querySelectorAll(".places");
// for (const pl of places2) {
//   console.log(pl.innerText);
// }

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

// const section1 = document.querySelector(".section3");
// section1.classList.add("color-bg");
// section1.classList.remove("color-bg");

// //1 select
// const ul = document.getElementById("items-name");
// console.log(ul);

// // 2 create Element
// const li1 = document.createElement("li");
// // 3 texinner
// li1.innerText = "kasem";
// // 4 appendChild
// ul.appendChild(li1);

// const li2 = document.createElement("li");
// li2.innerText = "HASEM";
// ul.appendChild(li2);
// const li3 = document.createElement("li");
// li3.innerText = "KAWSAR";
// ul.appendChild(li3);

// 1 select main parent
// const main = document.getElementById("main-01");
// console.log(main);

// // 2 create Element
// const h1 = document.createElement("h1");
// // 3 innerText
// h1.innerText = " hi i am shakib leaener a webdevelopment";
// // 4 add main parent by appendchild
// main.appendChild(h1);

// // part 2 same to same
// const ul = document.createElement("ul");
// main.appendChild(ul);

// const li = document.createElement("li");
// li.innerText = "first html";
// ul.appendChild(li);

// const li2 = document.createElement("li");
// li2.innerText = "second css";
// ul.appendChild(li2);
// const li3 = document.createElement("li");
// li3.innerText = "third tailwind ";
// ul.appendChild(li3);
// const li4 = document.createElement("li");
// li4.innerText = "fourth javascript";
// ul.appendChild(li4);

// node child

// const nodes = document.getElementsByClassName("like-place");
// for (const nod of nodes) {
//   console.log(nod.innerText);
// }

// const node = document.getElementById("list");
// const childnode = node.childNodes;
// const last = node.lastChild;
// const laspre = last.previousSibling;
// console.log(laspre);

// console.log(node);
// const first = node.firstChild;
// console.log(first.innerText);
// const pre = first.nextSibling;
// console.log(pre.innerText);
// const nextPre = pre.nextSibling;
// console.log(nextPre.innerText);

/* use  slector get ALL-child */

// 1 first child / firstChild
const first = document.querySelector(".unorder-list");
console.log(first.firstChild);
// or
console.log(first.firstElementChild);

// 2 last child /  lastChild
const last = document.querySelector(".unorder-list");
console.log(last.lastChild);
// or
console.log(last.lastElementChild);

// 3 childNodes / children
const childNodes = document.querySelector(".unorder-list");
console.log(childNodes.childNodes);
// or
console.log(childNodes.children);

// 4 current to  nextElement
const current = document.querySelector(".current");
console.log(current.nextElementSibling);

// 5 current to previous Element
const current2 = document.querySelector(".current");
console.log(current2.previousElementSibling);
