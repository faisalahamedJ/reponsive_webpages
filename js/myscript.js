


function validate(){
       let e_mail = document.getElementById('e_address').value;
       let pass_word = document.getElementById('e_password').value;


       if(e_mail.trim() == ""){
           alert("e-mail is required");
           return false;
       }
       else if(pass_word.trim() == "")
       {
           alert("Please Enter the password");
           return  false;
       }
       else if(e_mail != "faisal@gmail.com"){    

            alert("Please Enter the correct e-mail ID");
            return false;
       }
       else if(pass_word != "98765")
       {
            alert("Please Enter the correct Password");
            return false;
       }
       else if(e_mail == "faisal@gmail.com" && pass_word == "98765")
       {
            
            return true;
       }
       else{
           alert("try again");
           return false;
       }

}


function do_display(){
    let x = document.getElementById('show');
    if(x.style.display == "block"){
        x.style.display = "none";
    }
    else if(x.style.display == "none") {
        x.style.display = "block";
    }
    
}

