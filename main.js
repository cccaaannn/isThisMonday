function getDay(){
    let date = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

function isThisMonday(){
    if(today == "Monday"){
        document.body.style.backgroundColor = "#ff0062";
        document.body.innerHTML = responses["Monday"][index];
        index = (index + 1) % responses["Monday"].length;
    }
    else{
        document.body.style.backgroundColor = "#3bd60c";
        document.body.innerHTML = responses["notMonday"][index];
        index = (index + 1) % responses["notMonday"].length;
    }
}


const responses = {
    "Monday": ["<h1>Yes</h1> <p>:(</p>", "<p>Sorry</p>", "<p>:(</p>"],
    "notMonday": ["<h1>No</h1> <p>:D</p>", "<p>Go and enjoy your not monday</p>", "<h1>:D</h1>"]
}

let index = 0;

const today = getDay();


document.addEventListener("DOMContentLoaded", isThisMonday);
document.addEventListener("click", isThisMonday);


