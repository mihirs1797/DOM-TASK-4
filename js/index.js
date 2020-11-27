var form = document.getElementById("form");

form.addEventListener('submit',function(e){
    //e.preventDefault(); 
    addToStorage(e);
})

function addToStorage(e){
    var fname = document.getElementById("firstName").value;
    localStorage.setItem("fname",fname);
    var lname = document.getElementById("lastName").value;
    localStorage.setItem("lname",lname);
    var add1 = document.getElementById("address1").value;
    localStorage.setItem("add1",add1);
    var add2 = document.getElementById("address2").value;
    if(add2 === null){
        localStorage.setItem("add2"," ");
    }
    else{
        localStorage.setItem("add2",add2);
    }    
    var stateName = document.getElementById("state").value;
    localStorage.setItem("stateName",stateName);
    var countryName = document.getElementById("country").value;
    localStorage.setItem("countryName",countryName);
    var pincode = document.getElementById("pin").value;
    localStorage.setItem("pincode",pincode);
    var gender = document.getElementById("sex").value;
    localStorage.setItem("gender",gender);

    const fieldset = document.querySelector('.foodchoices');
    const checkboxes = fieldset.querySelectorAll('input[type=checkbox]:checked');
    if(checkboxes.length <2){
        alert("Select two food choices!");
        e.preventDefault();
    }
    if(checkboxes.length>2){
        alert("Select only two food choices!");
        e.preventDefault();
    }
    var fc1 = checkboxes[0].value;
    localStorage.setItem("fc1",fc1);
    var fc2 = checkboxes[1].value;
    localStorage.setItem("fc2",fc2);
}



