


const myForm = document.getElementById("registerForm");

myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    fetch('http://localhost/project_final/database/register.php', {
        method: 'post',
        body: formData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function(error) {
        console.log(error);
    })

});
