// Author:Akhila
// Date:23/02/23
function validate(){
    let name=document.getElementById("yname").value;    
    let n=document.getElementById("yname").value;
    let namereg=/^[a-z A-Z]{2,15}$/;
    let email=document.getElementById("yemail").value;
    let ereg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(name=="")
    {
        alert("Name field is empty");
        return false;
    }
    else if(!namereg.test(n)){
        alert("Enter Your currect Name");
        return false;
    }
    else if(email=="")
    {
        alert(" Please enter your email id");
        return false;
    }
    else if(!ereg.test(email)){
        alert("Enter Your currect email id");
        return false;
    }
    else{
        return true;
    }
}