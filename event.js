function bgRed() {
  document.body.style.backgroundColor = "red";
}
function bgBlue() {
  document.body.style.backgroundColor = "blue";
}

const button = document.getElementById('btn2')
button.onclick = darkMode;

function darkMode(){
  document.body.style.backgroundColor= 'red'
}

document.getElementById('most').addEventListener('click',function click (){
  document.body.style.backgroundColor= "yellow"
})
