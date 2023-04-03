function conflictError(message){
    return {
        name: "ConflictError",
        message,
    }
}

function duplicatedEmailError(email){
    return {
        name: "DuplicatedEmailError",
        message: "Este email já está em uso",
        email,
    }
}

function unauthorizedError(){
    return {
        name: "UnauthorizedErro",
        message: "Não autorizaado",
    }
}

function notFoundError(){
    return {
        name: "NotFoundError",
        message: "Sem resultados para sua pesquisa", 
    }
}

function invalidCredentialsError(){
    return {
        name: "InvalidCredentialsError",
        message: "Email ou senha incorretas",
    }
}

export default { conflictError, duplicatedEmailError, unauthorizedError, notFoundError, invalidCredentialsError }