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





//********************************* */ Withe Part Start ************************************************

let bodyPart = document.getElementById("bodyPart")
let darkMode = document.getElementById("darkMode")

let isLight = false

darkMode.addEventListener("click", ()=>{
  isLight = !isLight
  if(isLight){
      bodyPart.classList.remove("bg-black")
      bodyPart.classList.add("bg-red-900")
  }
  else{
    bodyPart.classList.remove("bg-red-900")
    bodyPart.classList.add("bg-gray-800")
  }
  
})
//********************************* */ Withe Part End ************************************************





// Back To top Part Start 

let backTop = document.getElementById('backTop')
//==== Back-to-top button

window.addEventListener('scroll', function(){
  if(window.scrollY > 600){
    backTop.classList.remove('hidden')
  }
  else{
    backTop.classList.add('hidden')
  }
})

backTop.addEventListener('click', function(){
  
  window.scrollTo({
    top: 0,
    behavior : 'smooth' 
  })
})


// Back To Top Part End


