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

export const getAllUsers = async () => {
    try {
        const response = await fetch('http://localhost:3000/users');
        return await response.json();
    } catch (error) {
        console.log('Erro: ', error);
    }
};