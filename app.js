let myEmojis = []
let emojiContainer = document.getElementById('emojiContainer')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const emojiInput = document.getElementById('emoji-input')
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')

//Render Emojis to screen
const renderEmojis = ()=>{
   for(let i=0; i<myEmojis.length; i++){
      emojiContainer.innerHTML = `<span> ${myEmojis}</span>`
   }
}

pushBtn.addEventListener('click', ()=>{
   //will only run if there is input 
   if(emojiInput.value){
      myEmojis.push(emojiInput.value)
      emojiInput.value= ''
      renderEmojis()
   }  
})

// Unshift Btn
unshiftBtn.addEventListener('click',() =>{
   //will only run if there is actual input 
   if(emojiInput.value){
      myEmojis.unshift(emojiInput.value)
      emojiInput.value= ''
      renderEmojis()
   }  
})

//Pop Btn
popBtn.addEventListener('click',()=>{
myEmojis.pop()
renderEmojis()
})


//Shift Btn
shiftBtn.addEventListener('click', ()=>{
   myEmojis.shift()
   renderEmojis()
})

