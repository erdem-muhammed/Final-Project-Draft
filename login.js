
const loginInp = document.getElementById("loginInp");

const formData = new FormData();
formData.append("email", )

loginInp.addEventListener('submit', function() {
    fetch('http://localhost/project_final/database/login.php', {
        method: 'POST',
        mode: 'cors',
        
    })
})