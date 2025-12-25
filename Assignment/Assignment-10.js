let count = 0 

let enterValid = setInterval(() => {
    console.log(count)
    count++
    
    if(count > 10) 
        clearInterval(enterValid)
},2000)