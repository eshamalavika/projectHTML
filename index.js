var userName=document.getElementById('name');
var userNumber=document.getElementById('phone');
var userMail=document.getElementById('email');
var submitBtn=document.getElementById('submit');

//localStorage
function saveUserDetail(details){
localStorage.setItem("user-details",JSON.stringify(details));
}

function getUserDetail(){
    return JSON.parse(localStorage.getItem("user-details")||"[]");
}
submitBtn.addEventListener("click",()=>addUserDetail())

function addUserDetail(){
    const userDetails=getUserDetail();
    const userObject={
        name:userName.value,
        phoneNumber:userNumber.value,
        emailId:userMail.value
    };
    userDetails.push(userObject);
    saveUserDetail(userDetails);
}

