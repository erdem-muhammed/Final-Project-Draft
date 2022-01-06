
const loginInp = document.getElementById("loginInp");

const formData = new FormData();
formData.append("email", document.getElementById("usernameInp").value);
formData.append("password", document.getElementById("passInp").value);

loginInp.addEventListener('click', function() {
    fetch('http://localhost/project_final/database/login.php', {
        method: 'post',
        mode: 'cors',
        body: formData,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        if(result.successfull == "1")
        {
            document.cookie = "token=" + result.token;

            ///Welcome

            console.log("login successfull");
        }
        else
        {
            console.log("login failed!!");
        }
    })
});