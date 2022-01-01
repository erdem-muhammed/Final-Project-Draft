
const loginInp = document.getElementById("loginInp");

loginInp.addEventListener('submit', function() {
    fetch('http://localhost/project_final/database/login.php', {
        method: 'POST',
        mode: 'cors',
        
    })
})