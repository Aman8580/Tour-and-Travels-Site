let user = document.getElementById("user");
let loginBtn = document.getElementById("loginBtn");
let placeName = document.getElementById("placeName")
let submit = document.getElementById("submit")

user.addEventListener("click",function(){
    document.querySelector(".loginpage").classList.toggle("active1");
})

loginBtn.addEventListener("click",function(){

    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Please fill Detail")
    }else{
        alert("You Logged In");
        document.querySelector(".loginpage").style.display="none"
    }
})  

submit.addEventListener("click", function(){
    if(placeName.value == ""){
        alert("Please Fill The Form")
    }else{
        alert(placeName.value + " Tour Booked Enjoy Weekend ")
    }
}) 