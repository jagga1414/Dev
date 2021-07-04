
let myDB = window.localStorage;
let ticketContainer = document.querySelector(".tickets-container")


function saveToDB(ticketInfoObject){
 let allTicket = myDB.getItem("allTicket");
//  console.log(allTicket);
 if(allTicket){ 
     allTicket = JSON.parse(allTicket)
     allTicket.push(ticketInfoObject);
     myDB.setItem("allTicket",JSON.stringify(allTicket));
 }else{
     let  ticketArray = [ticketInfoObject];
     myDB.setItem("allTicket",JSON.stringify(ticketArray));
 }

}

function loadTickets(){
    let allTicket = myDB.getItem("allTicket");
    if(allTicket){
        allTicket = JSON.parse(allTicket)
        for(let i =0; i<allTicket.length; i++){
            let ticketInfoObject = allTicket[i];
            appendTicket(ticketInfoObject);
        }
    }
}