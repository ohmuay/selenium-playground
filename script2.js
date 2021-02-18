document.getElementById("user-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.querySelector(".first-name").value;
  const lastName = document.querySelector(".last-name").value;
  const gid = document.querySelector(".gid").value;

  const msg = document.querySelector("#text-area").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const site = document.querySelector("#site-dropdown").value;

  const cb1 = document.querySelector("#cb1").checked
  const cb2 = document.querySelector("#cb2").checked
  const cb3 = document.querySelector("#cb3").checked
  const cb4 = document.querySelector("#cb4").checked


  if (!!firstName && !!lastName && !!gid && cb1 && cb2 && cb3 && cb4 ) {
    alert(`
        
        welcome ${firstName} ${lastName}
        ${gid}
        ${msg}
        ${gender}
        ${site}
        
        `);
  } else {
    alert("please fill in more details");
  }
});
