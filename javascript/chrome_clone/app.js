//const loginForm = document.querySelector("#login-form");
const loginForm = document.querySelector("#login-form")  
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    // greeting.innerText = "Hello" + username;
    greeting.innerText = `Hello ${username}`
    
    greeting.classList.remove("hidden");
    
}

loginForm.addEventListener("submit",onLoginSubmit)
