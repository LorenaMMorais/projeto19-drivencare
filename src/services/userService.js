import userRepository from "../repositories/userRepository.js";

async function findByEmail({email}){
    const emailExist = await userRepository.findByEmail({email});

    if(!emailExist){
        throw new Error('Este email não encontrado!');
    }
    return emailExist;
}

async function signup({name, email, password, typeUser}){
    const emailExist = await findByEmail({email});
    console.log('emailExist',emailExist);
    
    if(emailExist) {
        throw new Error('Este email já está cadastrado!')
    };

    await userRepository.signup({name, email, password, typeUser});
}

export default {signup};