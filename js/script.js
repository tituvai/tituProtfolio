// Navbar Part Start 

  const menuBtn = document.getElementById("menuBtn");
  const manuList = document.getElementById("manuList");

  menuBtn.addEventListener("click",() =>{
    manuList.classList.toggle("hidden");
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