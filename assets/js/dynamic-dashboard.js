// Dashboard para usuário simples

export const userDashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    const header = document.createElement('header');
    header.innerHTML = `
    <nav>
        <h1>JN Eventos</h1>
        <div id="userNav">
            <p>${user.username}</p>
            <div id="navModal" style="display: none;">
                <span>Nome de usuário  <p>${user.username}</p></span>
                <span>Nome  <p>${user.name}</p></span>
                <span>Sobrenome  <p>${user.surname}</p></span>
                <span>Email  <p>${user.email}</p></span>
                <span>Idade  <p>${user.age}</p></span>
            </div>
        </div>
    </nav>
    `;
    
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(header);

    document.getElementById('userNav').onclick = () => {
        document.getElementById('navModal').style.display = 'initial';
    };
};