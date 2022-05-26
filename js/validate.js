// FUNCTIONS TO VALIDATE FORM CONTACT

const sendMail = function(event){

    event.preventDefault();

    let mail = new Object();
    var sw = false;

    mail.name = document.querySelector('#fname').value;
    mail.lastname = document.querySelector('#lname').value;
    mail.email = document.querySelector('#email').value;
    mail.phone = document.querySelector('#phone').value;
    mail.msg = document.querySelector('#message').value;

    console.log(mail);

    if(mail.name.length== 0) {
        let alertError = document.querySelector('.error_name');
        alertError.innerHTML = "This field is required";
        sw=true;
       
    }
    if(mail.lastname.length== 0) {
        let alertError = document.querySelector('.error_lastname');
        alertError.innerHTML = "This field is required";
        sw=true;
        
    }
    if(mail.email.length== 0) {
        let alertError = document.querySelector('.error_email');
        alertError.innerHTML = "This field is required";
        sw=true;
        
    }
    if(mail.msg.length== 0) {
        let alertError = document.querySelector('.error_msg');
        alertError.innerHTML = "This field is required";
        sw=true;
        
    }

    if (sw==false){
        swal('Contact ME','Message Send Succesfully','success');
        //swal({
          //  title: "Contact",
           // text: "Message Send Succesfully",
            //buttons: {
              //  confirm : {text:'OK'}
            //}
        //}
        //)
    }
    
    return;
   
}

const validateName = function(){

    let name = document.querySelector('#fname').value;

    if(name.length > 0) {
        let alertError = document.querySelector('.error_name');
        alertError.innerHTML = "";
        
    }
    return;
}

const validateLastName = function(){

    let name = document.querySelector('#lname').value;

    if(name.length > 0) {
        let alertError = document.querySelector('.error_lastname');
        alertError.innerHTML = "";
        
    }
    return;
}

const validateEmail = function(){

    let name = document.querySelector('#email').value;

    if(name.length > 0) {
        let alertError = document.querySelector('.error_email');
        alertError.innerHTML = "";
        
    }
    return;
}

const validateMsg = function(){

    let name = document.querySelector('#message').value;

    if(name.length > 0) {
        let alertError = document.querySelector('.error_msg');
        alertError.innerHTML = "";
        
    }
    return;
}

document.getElementById('email').addEventListener('input', function() {
    let campo = document.querySelector('#email').value;
    let valido = document.querySelector('.error_email');
        
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(campo)) {
      valido.innerHTML = "The E-mail adress given " + campo + " is wrong.";
    }
});