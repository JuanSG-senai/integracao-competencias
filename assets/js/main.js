import { userSignUpForm, userLogInForm, organizationSignUpForm, organizationLogInForm } from './dynamicForm.js';

if (localStorage.getItem('logado') == 1) {
    document.getElementById('switchForm').style.display = 'none';
    document.getElementById('dynamicForm').style.display = 'none';

    console.log('oi');    
} else {
    document.getElementById('userSignUpForm').onclick = userSignUpForm;
    document.getElementById('userLogInForm').onclick = userLogInForm;
    document.getElementById('organizationSignUpForm').onclick = organizationSignUpForm;
    document.getElementById('organizationLogInForm').onclick = organizationLogInForm;
}