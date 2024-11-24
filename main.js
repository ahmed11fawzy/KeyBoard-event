const input=document.querySelector('#input');


input.addEventListener('keydown', (e) => {
    alert("Character: " + e.key + " ASCII Code: " + e.keyCode); 
    
})

document.querySelector('#main').addEventListener('contextmenu',(e)=>{e.preventDefault()});