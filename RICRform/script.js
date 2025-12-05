document.getElementById("form").addEventListener("submit", function(e)
{
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if(name === "" || phone === "" || email === ""){
        document.getElementById("msg").innerHTML = "Please fill all required fields!";
        document.getElementById("msg").style.color = "red";
        return;
    }

    document.getElementById("msg").innerHTML = "Enquiry Submitted Successfully!";
    document.getElementById("msg").style.color = "green";

    document.getElementById("form").reset();
});
