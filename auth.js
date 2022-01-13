loginForm.onsubmit = async function(e){
    e.preventDefault();
    let formData = new FormData(loginForm);
    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    let response = await fetch("https://localhost:7267/api/auth/Login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    let responseData = await response.json();
    if(responseData.success == true){
        localStorage.setItem("token", responseData.token);
        window.location.href = "index.html";
    }
    else{
        document.getElementById("error").innerHTML = responseData.message;
    }
}

async function isLoggedIn () {
    const token = store.get('token')
    if (!token) return false  
  }

async function logout () {
    store.remove('token')
    window.location.href = 'login.html'
}

   
   