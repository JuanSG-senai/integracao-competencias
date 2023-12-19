import { userSignUpForm, userLogInForm, organizationSignUpForm, organizationLogInForm } from './dynamic-form.js';

if (localStorage.getItem('userType') == 'simple user') {

    document.getElementById('dynamicForm').style.display = 'none';    

} else if (localStorage.getItem('userType') == 'organization') {

    document.getElementById('dynamicForm').style.display = 'none';

} else {
    document.getElementById('switchForm').style.display = 'flex';

    document.getElementById('userSignUpForm').onclick = userSignUpForm;
    document.getElementById('userLogInForm').onclick = userLogInForm;
    document.getElementById('organizationSignUpForm').onclick = organizationSignUpForm;
    document.getElementById('organizationLogInForm').onclick = organizationLogInForm;

}