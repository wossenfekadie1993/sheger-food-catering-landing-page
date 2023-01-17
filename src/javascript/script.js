let fullImage = document.getElementById("full_img_container");
let full_img = document.getElementById("full_img");
function openfullimage(pic){
    fullImage.style.display = "flex";
    full_img.src=pic;
}
function closefullimage(){
    fullImage.style.display = "none";
    
}

let userName=document.getElementById('userField');
let email=document.getElementById('emailField');
let password=document.getElementById('passwordField');
let form=document.querySelector('form');
function inputValidation(){
    
    if (userName.value.trim()===""){
        onError(userName,"user name cann't be empty! please enter your username.");
    }
    else{
        onSuccess(userName)
    }

    if (email.value.trim()===""){
        onError(email,"email  cann't be empty! please enter your email.");
    }
    else if(!isValidEmail(email.value.trim())){
        onError(email,"Email is not valid! please enter a alid email.");
    }
    else{
        onSuccess(email)
    }

    if(password.value.trim()===""){
        onError(password,"password cannot be empty! please enter your password");
     }
     else if(password.value.length<8){
        onError(password,"password should contain at least character");
     }
     else{
         onSuccess(password);
     }
   

}

document.querySelector("button")
.addEventListener("click",(event) =>{
    event.preventDefault();
    inputValidation();

})
function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    messageEle.innerText="";
    parent.classList.add("success");
    parent.classList.remove("error");
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.remove("success");
    parent.classList.add("error");
}