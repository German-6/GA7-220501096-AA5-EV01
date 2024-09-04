// Selecciona el contenedor principal
const container = document.querySelector(".container");

// Selecciona los botones de inicio de sesión y registro
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

// Agrega un evento de clic al botón de inicio de sesión
btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");// Muestra el formulario de inicio de sesión
});

// Agrega un evento de clic al botón de registro
btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle"); // Muestra el formulario de registro
});

// Manejar el registro
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (localStorage.getItem(email)) {
        document.getElementById('registerMessage').textContent = 'El email ya está registrado';
        return;
    }

    localStorage.setItem(email, JSON.stringify({ name, password }));
    document.getElementById('registerMessage').textContent = 'Registro exitoso. Ahora puede iniciar sesión.';
    setTimeout(() => {
        container.classList.remove("toggle");
    }, 2000); // Espera 2 segundos para cambiar a la vista de inicio de sesión
});

// Manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        document.getElementById('loginMessage').textContent = 'Inicio de sesión con éxito';
    } else {
        document.getElementById('loginMessage').textContent = 'Hubo un error en los datos';
    }
});
