let icon = document.querySelectorAll("#editClose");
let Modal = document.querySelector(".modal");
let gosts = document.querySelector(".gosts")
let close = document.querySelector(".exit")
let addUser = document.querySelector("#add")
icon.forEach((e) => {
    e.addEventListener("click",()=> {
        Modal.classList.toggle("modalChiq")
        gosts.classList.toggle("gostsChiq")
    })
})
close.addEventListener("click", () => {
    Modal.classList.remove("modalChiq")
        gosts.classList.remove("gostsChiq")

})
addUser.addEventListener("click", () => {
     Modal.classList.toggle("modalChiq")
     gosts.classList.toggle("gostsChiq")    
})

