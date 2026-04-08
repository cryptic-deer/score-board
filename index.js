let homeScore = document.querySelector("#homeScore");
let guestScore = document.querySelector("#guestScore");

let homeScoreCount = 0;
let guestScoreCount = 0;

document.querySelector("#incrHomeByOne").addEventListener("click", ()=>{
   
   homeScore.textContent = homeScoreCount += 1;
});
document.querySelector("#incrHomeByTwo").addEventListener("click", ()=>{
   
   homeScore.textContent = homeScoreCount += 2;
});
document.querySelector("#incrHomeByThree").addEventListener("click", ()=>{
   
   homeScore.textContent = homeScoreCount += 3;
});


document.querySelector("#incrGuestByOne").addEventListener("click", ()=>{
   
   guestScore.textContent = guestScoreCount += 1;
});
document.querySelector("#incrGuestByTwo").addEventListener("click", ()=>{
   
   guestScore.textContent = guestScoreCount += 2; 
});
document.querySelector("#incrGuestByThree").addEventListener("click", ()=>{
   
   guestScore.textContent = guestScoreCount += 3; 
});

document.querySelector("#resetButton").addEventListener("click", ()=>{
    homeScoreCount = 0;
    homeScore.textContent = homeScoreCount;
    guestScoreCount = 0;
    guestScore.textContent = guestScoreCount;
});