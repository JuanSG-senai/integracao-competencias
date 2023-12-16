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
        let nome = document.getElementById('name').value;
        alert(`${nome}, seja bem vindo!`);
    };
};

export const userLogInForm = () => {
    formulario.innerHTML = 
    `
    <></>
    `;
};

export const organizationSignUpForm = () => {
    formulario.innerHTML = 
    `
    <label for="companyName">Nome da organização</label>
    <input type="text" id="companyName" required>

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

    <label for="companyLocation">Endereço sede da organização</label>
    <input type="text" id="companyLocation" required>

    <button type="submit">confirmar</button>
    `;
};

export const organizationLogInForm = () => {
    formulario.innerHTML = 
    `
    <></>
    `;
};