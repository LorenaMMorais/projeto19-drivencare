import connectionDb from "../config/database.js";

async function findByEmail({email}){
    return await connectionDb.query(`
        SELECT * FROM users 
        WHERE email = $1`, [email]);
}

async function signup({name, email, password, typeUser}){
    return await connectionDb.query(`
        INSERT INTO users (name, email, password, "typeUser") 
        VALUES ($1, $2, $3, $4)`, 
        [name, email, password, typeUser]);
}

async function createSession({userId, token}){
    return await connectionDb.query(`
    INSERT INTO sessions ("userId", token)
    VALUES ($1, $2)`, [userId, token]);
}

async function createUser({userId, typeUser}){
    if(typeUser === 'P'){
        await connectionDb.query(`
            SELECT * FROM doctors WHERE email = $1`, [userId]);
    }
}

export default {findByEmail, signup, createSession, createUser};