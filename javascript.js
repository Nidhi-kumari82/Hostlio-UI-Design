




  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });


const registerForm = document.getElementById("registerform");
if(registerForm){
registerForm.addEventListener("submit",function(e){
  e.preventDefault()
        var email = document.getElementById("email").value;
       var password=document.getElementById("password").value;

  //  var confirmpassword =document.getElementById("confirmpassword").value;
  //    if (password !== confirmpassword) {
  //     alert("Passwords do not match");
  //     return;
  //   }
     if (localStorage.getItem(email)) {
      alert("Email already registered. Try login.");
      return;
    }
     var user = {
      email:email,
      password: password
    };
      localStorage.setItem(email, JSON.stringify(user));

 
  alert("user Resister Successfully")
  window.location.href='login.html'
});
}

const loginForm = document.getElementById("loginform");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
      alert("User not found");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.password === password) {
      alert("Welcome back!");
      window.location.href = "index.html";
    } else {
      alert("Invalid password");
    }
  });
}


