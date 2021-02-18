document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username-box").value;
  const password = document.getElementById("password-box").value;

  if (username == password && !!username) {
    alert("Logged In!");
    window.location.replace("./page-one.html")
  }
  else{
      alert("username or password is invalid please try again!")
  }
  document.getElementById("username-box").value = ''
  document.getElementById("password-box").value = ''
});