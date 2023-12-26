import { deleteEvent, getAllEvents } from './service.js';

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
            <span class="userMenu" id="user">
                <img src="./assets/content/user.png">
                <p>${user.username}</p>
            </span>
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
    document.getElementById('user').onclick = () => {
        navModal.style.display = 'flex';
        body.style.pointerEvents = 'none';
        navModal.style.pointerEvents = 'auto';
    };
    document.getElementById('closeModal').onclick = () => {
        navModal.style.display = 'none';
        body.style.pointerEvents = 'auto';
    };

    // MAIN COM TODOS OS EVENTOS
    const main = document.createElement('main');
    main.innerHTML = `
    <h1 class="main-title">Eventos</h1>
    
    <div id="allEvents"></div>
    `;
    body.appendChild(main);

    getAllEvents().then(events => {
        events.reverse();
        events.forEach(event => {
            const cardEvent = document.createElement('div');
            cardEvent.setAttribute('class', 'cardEvent');
            cardEvent.innerHTML = `
            <img src="${event.bannerSrc}">
            <h1>${event.title}</h1>
            <span>Tipo: ${event.category}</span>
            <p>Organização:  ${event.organizerUsername}</p>
            <p>Descrição: ${event.description}</p>
            <p>Local: ${event.location}</p>
            <p>Data e hora: ${event.date}, aś ${event.time}</p>
            <a href="${event.link}">Ingressos</a>
            `;
            document.getElementById('allEvents').appendChild(cardEvent);
        });
    });
};

// Dashboard para organização

export const orgDashboard = () => {
    const orgUser = JSON.parse(localStorage.getItem('orgUser'));
    const body = document.getElementsByTagName('body')[0];

    // HEADER COM MODAL
    const header = document.createElement('header');
    header.innerHTML = `
    <nav class="nav">
        <h1>JN Eventos</h1>
        <div>
            <span class="userMenu" id="orgUser">
                <img src="./assets/content/org.png">
                <p>${orgUser.username}</p>
            </span>
            <div id="navModal">
                <span>Nome  <p>${orgUser.name}</p></span>
                <span>Nome de usuário  <p>${orgUser.username}</p></span>
                <span>Email  <p>${orgUser.email}</p></span>
                <span>Categoria  <p>${orgUser.eventType}</p></span>
                <span>Localização  <p>${orgUser.location}</p></span>
                <button id="closeModal">Fechar</button>
            </div>
        </div>
    </nav>
    `;

    body.appendChild(header);

    const navModal = document.getElementById('navModal');
    document.getElementById('orgUser').onclick = () => {
        navModal.style.display = 'flex';
        body.style.pointerEvents = 'none';
        navModal.style.pointerEvents = 'auto';
    };
    document.getElementById('closeModal').onclick = () => {
        navModal.style.display = 'none';
        body.style.pointerEvents = 'auto';
    };

    // MAIN COM TODOS OS EVENTOS
    const main = document.createElement('main');
    main.innerHTML = `
    <h1 class="main-title">Eventos</h1>
    
    <div id="allEvents"></div>
    `;
    body.appendChild(main);

    getAllEvents().then(events => {
        events.reverse();
        events.forEach(event => {
            if (event.organizerUsername == orgUser.username) {
                const cardEvent = document.createElement('div');
                cardEvent.setAttribute('class', 'cardEvent');
                cardEvent.innerHTML = `
                <img src="${event.bannerSrc}">
                <h1>${event.title}</h1>
                <span>Tipo: ${event.category}</span>
                <p>Organização:  ${event.organizerUsername}</p>
                <p>Descrição: ${event.description}</p>
                <p>Local: ${event.location}</p>
                <p>Data e hora: ${event.date}, aś ${event.time}</p>
                <a href="${event.link}">Ingressos</a>
                <button id="updateEvent">Modificar</button>
                <button id="deleteEvent">Excluir</button>
                `;
                document.getElementById('allEvents').appendChild(cardEvent);
                document.getElementById('deleteEvent').onclick = () => {
                    alert('Evento excluído com sucesso!');
                    deleteEvent(event.id);
                };
            } else {
                const cardEvent = document.createElement('div');
                cardEvent.setAttribute('class', 'cardEvent');
                cardEvent.innerHTML = `
                <img src="${event.bannerSrc}">
                <h1>${event.title}</h1>
                <span>Tipo: ${event.category}</span>
                <p>Organização:  ${event.organizerUsername}</p>
                <p>Descrição: ${event.description}</p>
                <p>Local: ${event.location}</p>
                <p>Data e hora: ${event.date}, aś ${event.time}</p>
                <a href="${event.link}">Ingressos</a>
                `;
                document.getElementById('allEvents').appendChild(cardEvent);
            }
        });
    });
};