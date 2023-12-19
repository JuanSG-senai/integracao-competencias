// Função assíncrona que faz uma requisição GET de todos os usuário

// const getRequest = async () => {
//     try {
//         const response = await fetch('http://localhost:3000/users');
//         return await response.json();
//     } catch (error) {
//         console.log('Erro: ', error);
//     }
// };

// Função que verfica se um usuário existe

// getRequest().then(resp => {
//     console.log(resp.includes(resp.find(user => user.id == 3)));
// });

const URL = 'http://localhost:3000/';

// REQUISIÇÕES DE USUÁRIOS

export const getAllUsers = async () => {
    try {
        const response = await fetch(URL+'users');
        return await response.json();
    } catch (error) {
        console.log('Erro: ', error);
    }
};

export const createUser = async (user) => {
    fetch(URL+'users', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => console.log('Sucesso: ', data))
    .catch((error) => console.log('Erro: ', error));
};

// REQUISIÇÕES DE ORGANIZAÇÕES

export const getAllOrganizations = async () => {
    try {
        const response = await fetch(URL+'organizations');
        return await response.json();
    } catch (error) {
        console.log('Erro: ', error);
    }
};