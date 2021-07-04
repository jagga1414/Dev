let allFilter = document.querySelectorAll(".filter");

// let ticketContainer = document.querySelector(".ticket-container")
loadTickets();

for(let i = 0; i < 5; i++){
    // console.log(allFilter[i]);
    allFilter[i].addEventListener("click", selectFilter);
}

let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let ticketModalOpen = false;
let isTextTyped = false;

console.log(openModal);



openModal.addEventListener("click", openTicketModal);
closeModal.addEventListener("click",closeTicketModal);


function selectFilter(e){
    if(e.target.classList.contains("active-filter")){
        e.target.classList.remove("active-filter")
        // document.querySelector(".active-filter").classList.remove("active-filter")
        ticketContainer.innerHTML = ``;
        loadTickets();
    }else{
        if(document.querySelector(".active-filter")){
            document.querySelector(".active-filter").classList.remove("active-filter")
        }
        e.target.classList.add("active-filter");
        ticketContainer.innerHTML = ``;
        loadFilteredTickets(e.target.classList[1]);
    }
}

function loadFilteredTickets(filter){
    console.log(filter)
   let allTicket = myDB.getItem("allTicket");
   allTicket = JSON.parse(allTicket)
   for(let i = 0;i<allTicket.length;i++){
    //    console.log(allTicket[i].ticketFilter);
       if(allTicket[i].ticketFilter == filter){
           appendTicket(allTicket[i]);
       }
   }
}

function openTicketModal(e){
    let div = document.createElement("div")
    if(ticketModalOpen){
        return;
    }
    div.classList.add("ticket-modal");
    div.innerHTML = `<div class="ticket-text" contenteditable="true">Enter Your Text!!</div>
    <div class="ticket-filters">
        <div class="ticket-filter red selected-filter"></div>
        <div class="ticket-filter blue"></div>
        <div class="ticket-filter green"></div>
        <div class="ticket-filter yellow"></div>
        <div class="ticket-filter black"></div>
    </div>`
    let body = document.querySelector("body")
    body.append(div);
    ticketModalOpen = true;

    let ticketText = div.querySelector(".ticket-text");
    ticketText.addEventListener("click",removeText);
    ticketText.addEventListener("keypress",function(e){
        if(e.key=="Enter"){
            let featureSelected = document.querySelector(".selected-filter").classList[1]
            let ticketInfoObject = {ticketFilter:featureSelected,ticketValue:e.target.textContent};
            ticketInfoObject.ticketId = uuid();
            appendTicket(ticketInfoObject);
            closeModal.click();
            saveToDB(ticketInfoObject); 
        }
    })
    let tickFilters = div.querySelectorAll(".ticket-filter");
    for(let i = 0;i<tickFilters.length;i++){
        tickFilters[i].addEventListener("click",function(e){
            if(e.target.classList.contains("selected-filter")){
                return;
            }
            document.querySelector(".selected-filter").classList.remove("selected-filter");
            e.target.classList.add("selected-filter")

        })
    }

}

function removeText(e){
    if(!isTextTyped){
        e.target.textContent = "";
        isTextTyped = true;
    }

}


function closeTicketModal(e){
    if(ticketModalOpen){
        document.querySelector(".ticket-modal").remove();
    }
    ticketModalOpen = false;
    isTextTyped = false;
}

function appendTicket(ticketInfoObject){
    let ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");
    ticketDiv.innerHTML = `<div class="ticket-header ${ticketInfoObject.ticketFilter}"></div>
    <div class="ticket-content">
        <div class="ticket-info">
            <div class="ticket-id">#${ticketInfoObject.ticketId}</div>
            <div class="ticket-delete fas fa-trash">
            </div>
        </div>
        <div class="ticket-value">
           ${ticketInfoObject.ticketValue}
        </div>
    </div>`
    let ticketHeader = ticketDiv.querySelector(".ticket-header");
    ticketHeader.addEventListener("click",function(e){
        changeFilter(e,ticketInfoObject.ticketId);
    });
    let deleteTicketButton = ticketDiv.querySelector(".ticket-delete");
    deleteTicketButton.addEventListener("click", function(e){
        ticketDiv.remove();
        deleteTicketFromDB(ticketInfoObject.ticketId);
    })
    ticketContainer.append(ticketDiv);
    
}
let colorObj = {0:"red",1:"blue",2:"green", 3:"yellow",4:"black"}
let revMapping = {"red":0,"blue":1,"green":2,"yellow":3,"black":4}
function changeFilter(e,ticketId){
    let toBeRemove = e.target.classList[1];
    e.target.classList.remove(toBeRemove);
    let toBeAdd = (revMapping[toBeRemove]+1)%5;
    e.target.classList.add(colorObj[toBeAdd]);
    let allTicket = myDB.getItem("allTicket");
    allTicket = JSON.parse(allTicket);
    for(let i = 0; i<allTicket.length;i++){
        
        if(allTicket[i].ticketId == ticketId){
            console.log(allTicket[i].ticketFilter);
            allTicket[i].ticketFilter = colorObj[toBeAdd];
        }
    }
    myDB.setItem("allTicket",JSON.stringify(allTicket));

}

function deleteTicketFromDB(ticketId){
    let allTicket = JSON.parse(myDB.getItem("allTicket"));
    let updateTicket = allTicket.filter(function(ticketOdject){
        if(ticketOdject.ticketId==ticketId){
            return false;
        }
        return true;
    })
    myDB.setItem("allTicket",JSON.stringify(updateTicket));
}