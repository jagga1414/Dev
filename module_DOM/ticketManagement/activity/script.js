let allFilter = document.querySelectorAll(".filter");
let ticketContainer = document.querySelector(".tickets-container")

for(let i = 0; i < 5; i++){
    // console.log(allFilter[i]);
    allFilter[i].addEventListener("click", selectFilter);
}

function selectFilter(e){
    let filterSelected = e.target.classList[1];
    console.log(filterSelected);
    if(ticketContainer.classList.length>1){
        ticketContainer.classList.remove(ticketContainer.classList[1])
    }
    ticketContainer.classList.add(filterSelected);
}