const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.querySelector('#passOne');
let passTwo = document.querySelector('#passTwo');
let passBtnOne = document.querySelector('#passBtnOne')
let passBtnTwo = document.querySelector('#passBtnTwo')
passBtnOne.disabled = true
passBtnOne.disabled = true


function genPass() {
    passBtnOne.disabled = false
    passBtnTwo.disabled = false
    passOne.textContent = ''
    passTwo.textContent = ''
    for (let i = 0; i < 15; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        passOne.textContent += characters[randomIndexOne]
        let randomIndexTwo = Math.floor(Math.random() * characters.length)
        passTwo.textContent += characters[randomIndexTwo]
    }
}
function copyPassOne() {
  navigator.clipboard.writeText(passOne.textContent)
  .then(() => alert('Password copied!'))
  .catch(err => console.error('Failed to copy: ', err))
}
function copyPassTwo() {
  navigator.clipboard.writeText(passTwo.textContent)
  .then(() => alert('Password copied!'))
  .catch(err => console.error('Failed to copy: ', err))
}


