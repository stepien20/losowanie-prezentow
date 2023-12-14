const butadd=document.querySelector(`#addGift`)
const butgive=document.querySelector(`#giveGift`)
const giftArray=[]
const display=document.querySelector(`#display`)
butadd.addEventListener(`click`,(evt)=>{
    evt.preventDefault()
    const giftName=document.querySelector(`#giftName`).value
    display.innerHTML=''
    if(giftName==''){
        display.innerHTML=`<h2 class="text-danger w-100 text-center">Podaj nazwę prezentu!!!</h2>`
        return 0
    }
    if(!isNaN(giftName)){
        display.innerHTML=`<h2 class="text-danger w-100 text-center">Prezent nie może być liczbą !!!</h2>`
        return 0
    }
    if(giftName.length<=2){
        display.innerHTML=`<h2 class="text-danger w-100 text-center">Nazwa prezentu jest za krótka !!!</h2>`
        return 0
    }
    giftArray.push(giftName)
    display.innerHTML=`Do listy zostało dodane: <span class="text-success">${giftName}</span>`
    console.log(giftArray)
})

butgive.addEventListener(`click`,evt=>{
    evt.preventDefault()
    display.innerHTML=''
    const userName=document.querySelector(`#userName`).value
    if(giftArray.length==0){
        display.innerHTML=`<h2 class="text-danger w-100 text-center">Nie można losować, nie ma prezentów  na liście !!!</h2>`
        return 0
    }
    if(userName==''){
        
        display.innerHTML=`<h2 class="text-danger w-100 text-center">Podaj imię !!!</h2>`
        return 0
    }
    if(userName.length<=2){
        
        display.innerHTML=`<h2 class="text-danger w-100 text-center">Imię jest za krótkie !!!</h2>`
        return 0
    }

    let index=Math.floor(Math.random() * giftArray.length)
    
    display.innerHTML=`<span class="text-success"><b>${userName}</b></span>, wylosowany dla Ciebie prezent to: <span class="text-success">${giftArray.pop()}</span>`
    console.log(giftArray)
    
})


const test=document.querySelector(`#test`)
