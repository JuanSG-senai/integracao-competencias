// Dashboard para usuário simples

export const userDashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    const body = document.getElementsByTagName('body')[0];

    // HEADER COM MODAL
    const header = document.createElement('header');
    header.innerHTML = `
    <nav class="nav">
        <h1>JN Eventos</h1>
        <div>
            <p id="userNav">${user.username}</p>
            <div id="navModal">
                <span>Nome de usuário  <p>${user.username}</p></span>
                <span>Nome  <p>${user.name}</p></span>
                <span>Sobrenome  <p>${user.surname}</p></span>
                <span>Email  <p>${user.email}</p></span>
                <span>Idade  <p>${user.age}</p></span>
                <button id="closeModal">Fechar</button>
            </div>
        </div>
    </nav>
    `;

    body.appendChild(header);

    const navModal = document.getElementById('navModal');
    document.getElementById('userNav').onclick = () => {
        navModal.style.display = 'flex';
        body.style.pointerEvents = 'none';
        navModal.style.pointerEvents = 'auto';
    };
    document.getElementById('closeModal').onclick = () => {
        navModal.style.display = 'none';
        body.style.pointerEvents = 'auto';
    };
};