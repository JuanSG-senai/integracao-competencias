export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response);
    }
    return response;
};

export const formError = () => {
    alert('Tente novamente e preencha os campos corretamente!');
    location.reload();
};