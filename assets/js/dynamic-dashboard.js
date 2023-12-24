// Dashboard para usuário simples

export const userDashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    const header = document.createElement('header');
    header.innerHTML = `
    <h1>JN Eventos</h1>
    <p>Username</p>
    <p>${user.username}</p>
    `;
    
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(header);
};