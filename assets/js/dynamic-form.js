import { formError, userOrEmailExistsError } from "./exceptions.js";
import { getAllUsers, getAllOrganizations, createUser, createOrganization } from "./service.js";

const formulario = document.getElementById('dynamicForm');

export const userSignUpForm = () => {
    formulario.innerHTML = 
    `
    <div>
        <label for="name">Nome</label>
        <input type="text" id="name" required>
    </div>

    <div>
        <label for="surname">Sobrenome</label>
        <input type="text" id="surname" required>
    </div>

    <div>
        <label for="username">Nome de usuário</label>
        <input type="text" id="username" required>
    </div>

    <div>
        <label for="email">Email</label>
        <input type="email" id="email">
    </div>

    <div>
        <label for="age">Idade</label>
        <input type="number" id="age" required>
    </div>

    <div>
        <label for="password">Senha</label>
        <input type="password" id="password" required>
    </div>

    <button id="submit" type="submit">confirmar</button>
    `;
    document.getElementById('submit').onclick = (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const password = document.getElementById('password').value;

        const myUser = {
            username: username,
            name: name,
            surname: surname,
            email: email,
            age: age,
            password: password
        };

        if (username !== '' && name !== '' && surname !== '' && email !== '' && age !== '' && password !== '') {
            getAllUsers().then(users => {
                if (users.find(user => user.username == username) == undefined || users.find(user => user.email == email) == undefined) {
                    alert('Sucesso! A página será recarregada, após isso entre com seu nome de usuário ou email e senha.');

                    createUser(myUser);
                } else {
                    userOrEmailExistsError();
                }
            });
        } else {
            formError();
        }
    };
};

export const userLogInForm = () => {
    formulario.innerHTML = 
    `
    <div>
        <label for="id">Seu id</label>
        <input type="number" id="id" required>
    </div>

    <div>
        <label for="password">Senha</label>
        <input type="password" id="password" required>
    </div>

    <button id="submit" type="submit">confirmar</button>
    `;
    getAllUsers().then(resp => {
        document.getElementById('submit').onclick= () => {
            const id = Number(document.getElementById('id').value);
            const password = document.getElementById('password').value;

            if (id !== '' && password !== '') {
                if (id < (resp.length - (resp.length - 1)) || id > resp.length) {
                    formError();
                } else {
                    if (password == resp[id-1].password) {
                        localStorage.setItem('userType', 'simple user');
                        localStorage.setItem('id', id);
                        location.reload();
                    } else {
                        formError();
                    }
                }
                return false;
            } else {
                formError();
            }
        }
    });
};

export const organizationSignUpForm = () => {
    formulario.innerHTML = 
    `
    <div>
        <label for="organizationName">Nome da organização</label>
        <input type="text" id="organizationName" required>
    </div>

    <div>
        <label for="username">Nome de usuário de organização</label>
        <input type="text" id="username" required>
    </div>

    <div>
        <label for="email">Email</label>
        <input type="email" id="email" required>
    </div>

    <div>
        <label for="eventType">Tipo de evento realizado</label>
        <select name="eventType" id="eventType" required>
            <option value="" disabled selected hidden>Selecione:</option>
            <option value="Show">Show</option>
            <option value="Reunião">Reunião</option>
            <option value="WorkShop">WorkShop</option>
            <option value="Festival">Festival</option>
            <option value="Feira">Feira</option>
            <option value="Desfile">Desfile</option>
            <option value="Conferência">Conferência</option>
            <option value="Seminário">Seminário</option>
            <option value="Treinamento">Treinamento</option>
            <option value="Torneio">Torneio</option>
            <option value="Outro">Outro</option>
        </select>
    </div>

    <div>
        <label for="organizationLocation">Endereço sede da organização</label>
        <input type="text" id="organizationLocation" required>
    </div>

    <div>
        <label for="password">Senha</label>
        <input type="password" id="password" required>
    </div>

    <button type="submit" id="submit">confirmar</button>
    `;
    document.getElementById('submit').onclick = () => {
        const name = document.getElementById('organizationName').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const eventType = document.getElementById('eventType').value;
        const organizationLocation = document.getElementById('organizationLocation').value;
        const password = document.getElementById('password').value;

        if (name !== '' && username !== '' && email !== '' && eventType !== '' && organizationLocation !== '' && password !== '') {
            getAllOrganizations().then(resp => {
                if (resp.find(organization => organization.username == username) == undefined && resp.find(organization => organization.email == email) == undefined) {
                    alert('Sucesso! A página será recarregada, após isso entre com nome de usuário ou email e senha.');

                    const user = {
                        "username": `${username}`,
                        "name": `${name}`,
                        "surname": `${surname}`,
                        "email": `${email}`,
                        "age": `${age}`,
                        "password": `${password}`
                    };

                    createUser(user);
                } else {
                    userOrEmailExistsError();
                }
            });
        } else {
            formError();
        }
    };
};

export const organizationLogInForm = () => {
    formulario.innerHTML = 
    `
    <div>
        <label for="id">Id da organização</label>
        <input type="number" id="id" required>
    </div>

    <div>
        <label for="password">Senha</label>
        <input type="password" id="password" required>
    </div>

    <button id="submit" type="submit">confirmar</button>
    `;
    getAllOrganizations().then(resp => {
        document.getElementById('submit').onclick= () => {
            const id = Number(document.getElementById('id').value);
            const password = document.getElementById('password').value;

            if (id !== '' && password !== '') {
                if (id < (resp.length - (resp.length - 1)) || id > resp.length) {
                    formError();
                } else {
                    if (password == resp[id-1].password) {
                        localStorage.setItem('userType', 'organization');
                        localStorage.setItem('id', id);
                        location.reload();
                    } else {
                        formError();
                    }
                }
                return false;
            } else {
                formError();
            }
        }
    });
};