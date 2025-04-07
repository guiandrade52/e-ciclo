const toast = document.getElementById('show-toast');
const iconToast = document.getElementById('icon-toast');
const toastMessage = document.getElementById('toast-message');

function showToast(type, title, message) {
    toast.style.display = 'flex';
    toast.classList.add('show');

    if (type === 'error') {
        iconToast.src = '../../assets/sgv/error-icon.svg'; 
        toastMessage.children[0].textContent = title;
        toastMessage.children[1].textContent = message;
        toast.classList.add('toast-error'); 
    } else if (type === 'success') {
        iconToast.src = '../../assets/sgv/success-icon.svg';  
        toastMessage.children[0].textContent = title;
        toastMessage.children[1].textContent = message;
        toast.classList.add('toast-success'); 
    }


    setTimeout(() => {
        toast.classList.remove('show');
        toast.style.display = 'none';
    }, 3000);
}
