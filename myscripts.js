 function jump() {
    window.location.href = "thanks.html";
}

function home() {
    window.location.href = "index.html";
}


function check_data(){
    let data=document.getElementById("name").value;
    if(data==""){
        alert("Name should not be empty");
    }
}

function phnnumber(){
    let num = document.getElementById("phone_number").value;
    if(num.length<10){
        alert("mobile number should be of 10 digit");
    }
}

function address_check(){
    let addr=document.getElementById("address").value;
    if(addr==""){
        alert("Address should not be empty");
    }
}

function showAlert() {
    var myText = "Do you really want to submit data!";
    alert (myText);
  }

function showAlertreset() {
    var myText = "Do you really want to reset data!";
    alert (myText);
  }