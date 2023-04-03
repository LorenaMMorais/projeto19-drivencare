import userService from "../services/userService.js";

async function signup(req, res){
    console.log(req.body);
    const {name, email, password, typeUser} = req.body;
    console.log(name);

    try {
        await userService.signup({ name, email, password, typeUser });
        return res.sendStatus(201);
    } catch(error){
        return res.status(500).send(error.message);
    }
}

async function signin(){

}

export default {signup, signin};