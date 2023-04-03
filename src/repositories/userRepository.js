import connectionDb from "../config/database.js";

async function findByEmail({email}){
    return connectionDb.query(`
        SELECT * FROM users 
        WHERE email = $1`, [email]);
}

async function signup({name, email, password, typeUser}){
    return connectionDb.query(`
        INSERT INTO users (name, email, password, "typeUser") 
        VALUES ($1, $2, $3, $4)`, 
        [name, email, password, typeUser]);
}

export default {findByEmail, signup};