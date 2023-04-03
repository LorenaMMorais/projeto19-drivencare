import userRepository from "../repositories/userRepository.js";

async function authValidation(req, res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer", "");

    if(!token) return res.status(401).send("Token invalido");

    try{
        const { rows: [session] } = await userRepository.findSessionsByToken(token);

        if(!session) return res.status(401).send("Sessão não encontrada");

        const { rows: [user] } = await userRepository.findById(session.userId);

        if(!user) return res.status(401).send("Usuário não encontrado");

        res.locals.user = user;

        next();

    } catch(error){
        res.status(500).send(error.message);
    }
}

export default { authValidation };