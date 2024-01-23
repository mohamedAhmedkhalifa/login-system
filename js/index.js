
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document .getElementById ("inputPassword");
var btn = document.getElementById("btn");
var dis = document.getElementById("dis");
var alertUser = document.getElementById ("alertUser");
var list = [];
if ( localStorage.getItem("property") !=null){
    list = JSON.parse(localStorage.getItem("property"));
}
console.log(list);
btn.addEventListener("click",function(){
    if(inputEmail.value=="" || inputPassword.value == ""){
        dis.classList.remove("d-none")
    }
    else{
        dis.classList.add("d-none")
        addProperty();
    }
    
})
function addProperty(){
   var property = {
    email:inputEmail.value,
    password:inputPassword.value,
   }
   for(var i = 0 ; i < list.length ; i++){
    console.log(list);
    if(list[i].email == inputEmail.value && list[i].password == inputPassword.value){
        localStorage.setItem("user", JSON.stringify(list[i].name))
        return location = 'home.html'
    }
   }
   clearProperty()
  return alertUser.innerHTML = "incorrect email or password";
}
function clearProperty(){
    inputEmail.value ="";
    inputPassword.value ="";
}
