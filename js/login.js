document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'jcondor' && password === 'jcondor123.') {
            alert('Ingreso exitoso');
            window.location.href = 'login.html'; // Redirige a la página de login
        } else if (username === 'dalemaa' && password === 'dalemaa123.') {
            alert('Ingreso exitoso');
            window.location.href = 'login.html'; // Redirige a la página de login
        } else if (username === 'admin' && password === 'admin') {
            alert('Ingreso exitoso');
            window.location.href = 'login.html'; // Redirige a la página de login
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});