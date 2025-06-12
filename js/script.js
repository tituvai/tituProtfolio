// Navbar Part Start 

let homePart = document.getElementById("homePart")
let aboutPart = document.getElementById("aboutPart")
let portfolioPart = document.getElementById("portfolioPart")
let contactPart = document.getElementById("contactPart")

homePart.addEventListener("click", function(){
    homePart.before.style.display = "block"
})

// Navbar Part End



// About Part Are Counter up Start 


let scileNumber = document.querySelectorAll("#scileNumber")

let arr = Array.from(scileNumber)

arr.map((item)=>{
    let counter = 0
    function count(){
        counter++
        
        item.innerHTML = counter + "%"
        if(counter == item.dataset.number){
            clearInterval(stop)
        }
    }
    
    let stop = setInterval(()=>{
        count()
    }, 1000/item.dataset.number)
    
    
    
    
})



// About Part Are Counter up End  