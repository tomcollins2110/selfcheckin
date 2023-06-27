function toggle(){
    event.preventDefault();

    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})

const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal , "You are Checked in! Please check your emails for additional information.", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}


const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){
    const usernameVal = username.value.trim();
    const reservationnumVal = reservationnum.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //guestname
    if(usernameVal === ""){
        setErrorMsg(username, 'Name cannot be blank');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'min 3 char');
    }
    else{
        setSuccessMsg(username);
    }

    //reservation 
    if(reservationnumVal === ""){
        setErrorMsg(reservationnum, 'Res. No. cannot be blank');
    }
    else if(reservationnumVal.length <=2){
        setErrorMsg(reservationnum, 'Min 3 char');
    }
    else{
        setSuccessMsg(reservationnum);
    }

    //email
    if(emailVal === ""){
        setErrorMsg(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Email is not valid');
    }
    else{
        setSuccessMsg(email);
    }

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'Pin cannot be blank');
    }
    else if(passwordVal.length <= 4){
        setErrorMsg(password, 'Min 5 char');
    }
    else{
        setSuccessMsg(password);
    }

    //confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'PIN cannot be blank');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Not Matched!');
    }
    else{
        setSuccessMsg(cpassword);
    }
    SuccessMsg(usernameVal);


}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
