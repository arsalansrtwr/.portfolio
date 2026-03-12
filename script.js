function toggleTheme(){

document.body.classList.toggle("dark")

}

const button=document.getElementById("toggleCVBtn")
const cvImage=document.getElementById("cvImage")

if(button){

button.onclick=function(){

if(cvImage.style.display==="block"){

cvImage.style.display="none"
button.textContent="Open CV"

}else{

cvImage.style.display="block"
button.textContent="Close CV"

}

}

}

function filterTable(){

let input=document.getElementById("search").value.toLowerCase()

let rows=document.querySelectorAll("#academicTable tbody tr")

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(input)?"":"none"

})

}

function validateForm(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let message=document.getElementById("message").value

if(name==""||email==""||message==""){

alert("Please fill all fields")

return false

}

return true

}