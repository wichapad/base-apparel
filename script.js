const form=document.getElementById("form");
const email=document.getElementById("email");

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(email.value===""){
        showerror(email," ")
    }
    else{
        showsuccess(email);
    }
})

function showerror(input,iconserror,message){
    const formControl=input.parentElement;
    formControl.className="form-control error";
    const error=formControl.querySelector("icons-errors");
    error.innerText=iconserror;
    const small=formControl.querySelector("small");
    small.innerText=message;
}

function showsuccess(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
}