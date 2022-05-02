const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");




function validateForm(params) {
  clearMessages();
  let errorFlag=false;

 if (nameInput.Value.length<1) {
   errorNodes[0].innertext="Nombre no puede quedar en blanco";
   nameInput.classList.add("error-border");
   errorFlag=true;
   
 }
 if (!emailIsvalit(email.value)) {

  errorNodes[1].innertext="Email no válido";
  email.classList.add("error-border");
  errorFlag=true;
 }
 if (message.value.length<1) {
  errorNodes[2].innertext="Email no válido";
  message.classList.add("error-border");
  errorFlag=true;
 }
 if (!errorflag) {
   
 }
}

function clearMessages() {
  for (let index = 0; index < errorNodes.length; index++) {
    errorNodes[index].innertext="";
    }
  email.classList.remove("error-border")
  nameInput.classList.remove(errorNodes);
  message.classList.remove("error-border")
}

function emailIsvalid() {
  let pattern="ddddddd"
  return pattern.test(email);
  }