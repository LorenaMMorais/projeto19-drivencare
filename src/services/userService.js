import userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

async function findByEmail({email}){
    const emailExist = (await userRepository.findByEmail({email})).rows;

    if(emailExist.length === 0) throw new Error('Este email não encontrado!');

    return emailExist;
}

async function signup({name, email, password, typeUser}){
    const emailExist = await findByEmail({email});
    console.log('emailExist',emailExist);
    
    if(emailExist) throw new Error('Este email já está cadastrado!');

    const hashPassword = await bcrypt.hash(password, 10);

    await userRepository.signup({name, email, password: hashPassword, typeUser});
}

export default {signup};