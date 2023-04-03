import userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

async function createUser({email, typeUser}){
    const { rows: users } = await userRepository.findByEmail({email});
    const [user] = users;

    await userRepository.createUser({userId: user.id, typeUser: user.typeUser});
}

async function signup({name, email, password, typeUser}){
    const { rows: users } = await userRepository.findByEmail({email});
    
    if(users.length !== 0) throw new Error('Este email já está cadastrado!');

    const hashPassword = await bcrypt.hash(password, 10);

    await userRepository.signup({name, email, password: hashPassword, typeUser});

    createUser({email, typeUser});
}

async function signin({email, password}){
    const { rows: users } = await userRepository.findByEmail({email});

    if(users.length === 0) throw new Error ('Email ou senha incorreto!');

    const [user] = users;

    const passwordIsValid = await bcrypt.compare(password, user.password) === true;

    if(!passwordIsValid) throw new Error ('Email ou senha incorreto!');

    const token = uuidV4;

    await userRepository.createSession({userId: user.id, token});

    return token;
}

export default {createUser, signup, signin};