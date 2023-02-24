

fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => {
    const users = data.data;
    // const container=document.createElement('div');
    const list = document.createElement('ul');
    list.classList.add("container");
    for (const user of users) {
      const listItem = document.createElement('li');
      listItem.classList.add("userList");
      const avatar = document.createElement('img');
      avatar.classList.add("userImage");
      avatar.src = user.avatar;
      const name = document.createElement('h3');
      name.classList.add("userName");
      name.innerText = `${user.first_name} ${user.last_name}`;
      const email = document.createElement('p');
      email.classList.add("userEmail");
      email.innerText = user.email;
      // container.appendChild(list);
      listItem.appendChild(avatar);
      listItem.appendChild(name);
      listItem.appendChild(email);
      list.appendChild(listItem);
    }
    document.body.appendChild(list);
  })
  .catch(error => console.error(error));


var logOutBtn=document.getElementById('logOut-btn');
logOutBtn.addEventListener("click",()=>{
    window.location.href="index.html";
})
logOutBtn.addEventListener("click",()=>{
    deleteDetails();
})
function saveUserDetail(details){
    localStorage.setItem("user-details",JSON.stringify(details));
}
function getUserDetail(){
    return JSON.parse(localStorage.getItem("user-details")||"[]");
}
function deleteDetails(){
    localStorage.clear();
}
