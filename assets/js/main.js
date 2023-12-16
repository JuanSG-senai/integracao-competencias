import { userSignUpForm, userLogInForm, organizationSignUpForm, organizationLogInForm } from './service.js';

document.getElementById('userSignUpForm').onclick = userSignUpForm;
document.getElementById('userLogInForm').onclick = userLogInForm;
document.getElementById('organizationSignUpForm').onclick = organizationSignUpForm;
document.getElementById('organizationLogInForm').onclick = organizationLogInForm;