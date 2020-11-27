var i = 1;
function addToTable(){
    document.getElementById("serial").innerText = i;
    document.getElementById("fname").innerText = localStorage.getItem("fname");
    document.getElementById("lname").innerText = localStorage.getItem("lname");
    document.getElementById("add1").innerText = localStorage.getItem("add1");
    document.getElementById("add2").innerText = localStorage.getItem("add2");
    document.getElementById("statename").innerText = localStorage.getItem("stateName");
    document.getElementById("countryname").innerText = localStorage.getItem("countryName");
    document.getElementById("pincode").innerText = localStorage.getItem("pincode");
    document.getElementById("gender").innerText = localStorage.getItem("gender");
    document.getElementById("fc1").innerText = localStorage.getItem("fc1");
    document.getElementById("fc2").innerText = localStorage.getItem("fc2");
    i++;
}

addToTable();