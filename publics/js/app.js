
const weatherform =document.querySelector('form')
const search =document.querySelector('input')
const messagetwo =document.querySelector('#message2')
const messageone =document.querySelector('#message1')




weatherform.addEventListener('submit',(e)=>{

e.preventDefault()

const location=search.value



messageone.textContent='Loading...'
messagetwo.textContent=' '


fetch('/Weather?address='+location).then((response)=>{

response.json().then((data)=>{
if(data.error)
{
    messageone.textContent=data.error
    
}


    else{

    messagetwo.textContent = data.address


    messageone.textContent = data.forecast


    }


})

})



})