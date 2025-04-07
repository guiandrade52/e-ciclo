// elementos da página
//inputs
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const password = document.getElementById("password");

//button
const registerButton = document.getElementById("register-button");


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

let usersLocalStorage;

const getLocalStorageUsers = () => {
    usersLocalStorage = JSON.parse(localStorage.getItem('db_users'));
}

registerButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    if (!userName.value || !email.value || !password.value) {
        showToast('error', 'Erro!', 'Preencha os campos obrigatórios');
        userName.classList.add("error");
        email.classList.add("error");
        password.classList.add("error");
        return;
    } 
    if (newUser()) {
        const user = { id: generateId(), password: password.value, name: userName.value, email: email.value, phone: phone.value };
        const users = usersLocalStorage ? [...usersLocalStorage, user ] : [user];        
        localStorage.setItem('db_users', JSON.stringify(users));
        localStorage.setItem('user', JSON.stringify(user));
        showToast('success', 'Tudo certo!', 'Usuário cadastrado com sucesso!');
        setTimeout(() => {
            window.location.href = "../Home/home.html";
        }, 2000)
    }
});

const newUser = () => {
    if (usersLocalStorage) {
        for (let index = 0; index < usersLocalStorage.length; index++) {
            const user = usersLocalStorage[index];
            if (user.email === email.value) {
                showToast('error', 'Erro!', 'Usuário já cadastrado!');
                email.classList.add("error");
                return false;
            }
        }
    }
    return true;
}

userName.addEventListener("click", () => {
    userName.classList.remove("error");
});

email.addEventListener("click", () => {
    email.classList.remove("error");
});

password.addEventListener("click", () => {
    password.classList.remove("error");
});

window.onload = () => {
    getLocalStorageUsers();
};