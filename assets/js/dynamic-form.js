import { formError } from "./exceptions.js";
import { getAllUsers, getAllOrganizations, createUser, createOrganization } from "./form-requests.js";

const formulario = document.getElementById('dynamicForm');

export const userSignUpForm = () => {
    formulario.innerHTML = 
    `
    <label for="name">Nome</label>
    <input type="text" id="name" required>

    <label for="age">Idade</label>
    <input type="number" id="age" required>

    <label for="password">Senha</label>
    <input type="password" id="password" required>

    <button id="submit" type="submit">confirmar</button>
    `;
    document.getElementById('submit').onclick = () => {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const password = document.getElementById('password').value;

        if (name !== '' && age !== '' && password !== '') {
            event.preventDefault();
            const user = {
                "username": `${name}`,
                "age": `${age}`,
                "password": `${password}`
            };

            createUser(user);

        } else {
            formError();
        }
    };
};

export const userLogInForm = () => {
    formulario.innerHTML = 
    `
    <label for="id">Seu id</label>
    <input type="number" id="id" required>

    <label for="password">Senha</label>
    <input type="password" id="password" required>

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
    <label for="organizationName">Nome da organização</label>
    <input type="text" id="organizationName" required>

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

    <label for="organizationLocation">Endereço sede da organização</label>
    <input type="text" id="organizationLocation" required>

    <label for="password">Senha</label>
    <input type="password" id="password" required>

    <button type="submit" id="submit">confirmar</button>
    `;
    document.getElementById('submit').onclick = () => {
        const name = document.getElementById('organizationName').value;
        const eventType = document.getElementById('eventType').value;
        const organizationLocation = document.getElementById('organizationLocation').value;
        const password = document.getElementById('password').value;

        if (name !== '' && eventType !== '' && organizationLocation !== '' && password !== '') {
            event.preventDefault();
            const organization = {
                "name": `${name}`,
                "eventType": `${eventType}`,
                "location": `${organizationLocation}`,
                "password": `${password}`
            };

            createOrganization(organization);

        } else {
            formError();
        }
    };
};

export const organizationLogInForm = () => {
    formulario.innerHTML = 
    `
    <label for="id">Id da organização</label>
    <input type="number" id="id" required>

    <label for="password">Senha</label>
    <input type="password" id="password" required>

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