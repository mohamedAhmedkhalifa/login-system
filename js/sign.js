var inputEmail = document.getElementById("inputEmail");
var inputPassword = document .getElementById ("inputPassword");
var inputName = document.getElementById("inputName")
var btn = document.getElementById("btn");
var dis = document.getElementById("dis");
var disP = document.getElementById("disP")
var disPl = document.getElementById("disPl")
var list = [];
if ( localStorage.getItem("property") !=null){
    list = JSON.parse(localStorage.getItem("property"));
}
btn.addEventListener("click",function(){
    if(inputEmail.value=="" || inputPassword.value == "" || inputName.value == ""){
        dis.classList.remove("d-none")
        disP.classList.add("d-none")
    }
    else{
        dis.classList.add("d-none")
        addProperty();
    }
})
inputName.addEventListener("input", function(){
    validName()
    
})
inputEmail.addEventListener("input", function(){
    validEmail()
   
    
})
inputPassword.addEventListener("input", function(){
    validPassword()
    
})


function addProperty(){
    if(validName()==true && validEmail()==true && validPassword()==true){
        var property = {
            name:inputName.value,
            email:inputEmail.value,
            password:inputPassword.value,
        }
           for(var i = 0 ; i < list.length ; i++ ){
            if(list[i].email == inputEmail.value){
                disPl.innerHTML ="email already exists"
                disP.classList.add("d-none")
                disPl.classList.remove("d-none")
                return 
            }
            else{
                disP.classList.remove("d-none")
                disPl.classList.add("d-none")
            }
            }
        list.push(property);
        localStorage.setItem("property",JSON.stringify(list))
        console.log(list);
        clearProperty();
    }
      
       }
       
    
function clearProperty(){
    inputName.value="";
    inputEmail.value ="";
    inputPassword.value ="";
}

function validName(){
    text =inputName.value
    var regexName = /^[a-z]{3,8}$/
    if(regexName.test(text)){
        inputName.classList.add("is-valid")
        inputName.classList.remove("is-invalid")
        
        return true 

    }
    else {
        inputName.classList.add("is-invalid")
        inputName.classList.remove("is-valid")
        return false
    }
}

function validEmail(){
    text1 = inputEmail.value
    var regexEmail = /^[a-zA-z]{1,}(@)(yahoo|gmail|outlook|hotmail)\.com$/
    if(regexEmail.test(text1)){
        
        inputEmail.classList.add("is-valid")
        inputEmail.classList.remove("is-invalid")
        return true
    }
    else {
        inputEmail.classList.add("is-invalid")
        inputEmail.classList.remove("is-valid")
        return false
    }
}
function validPassword(){
    text2 = inputPassword.value
    var regexPassword =/^[A-Za-z]\w{7,14}$/
    if(regexPassword.test(text2)){
        inputPassword.classList.add("is-valid")
        inputPassword.classList.remove("is-invalid")
        return true
    }
    else {
        inputPassword.classList.add("is-invalid")
        inputPassword.classList.remove("is-valid")
        return false
    }
}
