// elementos da página
//inputs
const email = document.getElementById("user-email"); 
const password = document.getElementById("user-password");
const recoverEmail = document.getElementById("recover-email");
const recoverPassword = document.getElementById("recover-password");
//buttons
const loginButton = document.getElementById("login-button");
const continueButton = document.getElementById("continue-button");
const googleButton = document.getElementById("google-button");
const recoverButton = document.getElementById("recover-button");
const resetButton = document.getElementById("reset-button");
const returnButton = document.getElementById("return-button");
//span
const register = document.getElementById("register");
const forgotPassword = document.getElementById("forgot-password");
//div
const modal = document.querySelector(".modal");
const stepEmail = document.querySelector(".step-email");
const stepPassword = document.querySelector(".step-password");
const stepError = document.querySelector(".step-error");

// eventsListeners
register.addEventListener("click", () => {
    window.location.href = "../Cadastro/cadastro.html";
});

continueButton.addEventListener("click", () => {
    window.location.href = "../Home/home.html";
});

// Exibe a modal ao clicar no link
forgotPassword.addEventListener("click", () => {
    modal.style.display = "flex";
    stepEmail.style.display = 'flex';
    stepPassword.style.display = 'none';
    stepError.style.display = 'none';
});

// Fecha a modal ao clicar fora dela
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Array para o banco de dados de usuários baseado em JSON
let db_users = [];

// Objeto para o usuário corrente
let user = {};

// gerando id 
const generateId = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

// iniciando login com alguns dados
const users = [
    { id: generateId(), password: "123", name: "Administrador", email: "admin@email.com", phone: ''},
    { id: generateId(), passwordsenha: "123", name: "Usuario", email: "user@email.com", phone: ''},
    { id: generateId(), passwordsenha: "123", name: "Usuario", email: "guilherme@email.com", phone: ''},
]

const initLogin = () => {
    localStorage.clear('user');
    let usersLocalStorage = localStorage.getItem('db_users');

    if (usersLocalStorage) {
        db_users = [...users, JSON.parse(usersLocalStorage)];
    } else {
        db_users = users;
    }
}

// verifica email e senha informados ao fazer o login
const loginUser = () => {
    let userFound = false;
    for (let index = 0; index < db_users.length; index += 1) {
        const user = db_users[index];        
        if (email.value === user.email && password.value  === user.password) {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = "../Home/home.html";
            userFound = true;
        }
    }
    if (!userFound) {
        showToast('error', 'Erro!', 'Usuário ou senha incorretos!');
    }
}

loginButton.addEventListener('click', loginUser);


// verifica email para redefinir a senha

const checkEmail = () => {
    let emailFound = false;
    for (let index = 0; index < db_users.length; index += 1) {
        const user = db_users[index];        
        if (recoverEmail.value === user.email) {
            emailFound = true;
            localStorage.setItem("resetEmail", JSON.stringify(user.email));
            stepEmail.style.display = 'none';
            stepPassword.style.display = "flex";
            stepPassword.classList.add("show");
        }
    }
    if (!emailFound) {
        stepEmail.style.display = 'none';
        stepError.style.display = 'flex';
        stepError.classList.add("show-error");
    }
}

recoverButton.addEventListener("click", checkEmail);

const resetPassword = () => {
    const email = JSON.parse(localStorage.getItem("resetEmail"));
    for (let index = 0; index < db_users.length; index += 1) {
        const user = db_users[index];        
        if (user.email === email) {
            user.password = recoverPassword.value;
        }
    }
    
    localStorage.setItem("db_users", JSON.stringify(db_users));
    modal.style.display = "none";
    showToast("success", "Tudo certo!", "Senha redefinida com sucesso!")
}

resetButton.addEventListener("click", resetPassword);

returnButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.onload = () => {
    initLogin();
}