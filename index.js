
// Contact page functionality

function submitMsg(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var msg = document.getElementById("msg").value

    if (name && email && subject && msg) {
        alert("Your message have sent successfully")
    }

    else {
        alert("Please fill out the details")
    }
}