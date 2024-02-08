
const WhatIsBtn = document.getElementById("what-btn")
const ansWhatIs = document.getElementById("whatIsAnswer")

WhatIsBtn.addEventListener('click', function() {
    if (ansWhatIs.style.display === "none" || ansWhatIs.style.display === "") {
        ansWhatIs.style.display = "block"
        WhatIsBtn.setAttribute("class", "bx bxs-minus-circle")
        WhatIsBtn.style.color = "black"
    } else {
        ansWhatIs.style.display = "none"
        WhatIsBtn.setAttribute("class", "bx bxs-plus-circle")
        WhatIsBtn.style.color = "#aa25ef"
    }
})

const isFreebtn = document.getElementById("free-btn")
const ansIsFree = document.getElementById("isFreeAnswer")

isFreebtn.addEventListener('click', function() {
    if (ansIsFree.style.display === "none" || ansIsFree.style.display === "") {
        ansIsFree.style.display = "block"
        isFreebtn.setAttribute("class", "bx bxs-minus-circle")
        isFreebtn.style.color = "black"
    } else {
        ansIsFree.style.display = "none"
        isFreebtn.setAttribute("class", "bx bxs-plus-circle")
        isFreebtn.style.color = "#aa25ef"
    }
})

const portfolioBtn = document.getElementById("port-btn")
const ansPortfolio = document.getElementById("portfolioAnswer")

portfolioBtn.addEventListener('click', function() {
    if (ansPortfolio.style.display === "none"|| ansPortfolio.style.display === "") {
        ansPortfolio.style.display = "block"
        portfolioBtn.setAttribute("class", "bx bxs-minus-circle")
        portfolioBtn.style.color = "black"
    } else {
        ansPortfolio.style.display = "none"
        portfolioBtn.setAttribute("class", "bx bxs-plus-circle")
        portfolioBtn.style.color = "#aa25ef"
    }
})



const stuckBtn = document.getElementById("stuck-btn")
const ansStuck = document.getElementById("stuckAnswer")
stuckBtn.addEventListener('click', function() {
    console.log("button clicked")
    if (ansStuck.style.display === "none" || ansStuck.style.display === "") {
        ansStuck.style.display = "block";
        stuckBtn.setAttribute("class", "bx bxs-minus-circle");
        stuckBtn.style.color = "black";
    } else {
        ansStuck.style.display = "none";
        stuckBtn.setAttribute("class", "bx bxs-plus-circle");
        stuckBtn.style.color = "#aa25ef";
    }
})

