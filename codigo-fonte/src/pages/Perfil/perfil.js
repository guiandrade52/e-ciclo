const userName = document.getElementById("userName");
const email = document.getElementById("userEmail");
const phone = document.getElementById("userPhone");
const password = document.getElementById("userPassword");
const changeInfoButton = document.getElementById("changeInfo-button");
const goBackButton = document.getElementById("goBack-button");

let usersLocalStorage;
let loggedUser;

const getLocalStorageUsers = () => {
    loggedUser = JSON.parse(localStorage.getItem('user'));
    usersLocalStorage = JSON.parse(localStorage.getItem('db_users'));

    if (loggedUser) {
        userName.value = loggedUser.name;
        email.value = loggedUser.email;
        phone.value = loggedUser.phone;
        password.value = loggedUser.password;
    }
}

changeInfoButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (!userName.value || !email.value || !password.value) {
        showToast('error', 'Erro!', 'Preencha os campos obrigatórios');
        userName.classList.add("error");
        email.classList.add("error");
        password.classList.add("error");
        return;
    }
    const newUser = {id: loggedUser.id, email: email.value, name: userName.value, phone: phone.value, password: password.value};
    if (usersLocalStorage) {
        for (let index = 0; index < usersLocalStorage.length; index++) {
            const user = usersLocalStorage[index];
            if (user.id === loggedUser.id) {
                usersLocalStorage[index] = newUser;
            }
        }
    }
    localStorage.setItem('db_users', JSON.stringify(usersLocalStorage));
    localStorage.setItem('user', JSON.stringify(newUser));
    showToast('success', 'Tudo certo!', 'Informações alteradas com sucesso!');
    setTimeout(() => {
        window.location.href = "../Home/home.html";
    }, 2000)
});

goBackButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "../Home/home.html";
})



window.onload = () => {
    getLocalStorageUsers();
};