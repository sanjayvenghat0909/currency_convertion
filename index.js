
 function api_caller()
{
    let api_value='https://icanhazdadjoke.com/'
    return new Promise((resolve,reject)=>{
        fetch(api_value,{
            headers:{
                Accept: "application/json"
            } 
            
        }).then((val)=>val.json()).
        then((val)=>resolve(val)).
        catch(val=>reject(val))
    })
} 
api_caller()
.then(val=>
    { 
    let para_value=document.querySelector(".inner_value")
    let reload=document.querySelector("a")
    let para=document.createElement("para")
    para.innerHTML=val.joke
    para_value.appendChild(para)
    reload.addEventListener("click",()=>{
        event.preventDefault()
        window.location.reload()

        
    })

    })
.catch((val)=>console.log(val)) 

