import{s as o}from"./main.c098d540.js";import{C as t}from"./vendor.b8517bc6.js";window.onload=function(){null===localStorage.getItem("token")&&(window.location.href="/login/",console.log("unauthorised user"))};t({headers:{Authorization:"Token "+localStorage.getItem("token")},url:"https://todo-app-csoc.herokuapp.com/auth/profile/",method:"get"}).then((function({data:e,status:a}){document.getElementById("avatar-image").src="https://ui-avatars.com/api/?name="+e.name+"&background=fff&size=33&color=007bff",document.getElementById("profile-name").innerHTML=e.name,t({headers:{Authorization:"Token "+localStorage.getItem("token")},url:"https://todo-app-csoc.herokuapp.com/todo/",method:"get"}).then((function({data:t,status:e}){console.log(t),document.getElementById("");for(let a of t)o(a.id,a.title)}))}));