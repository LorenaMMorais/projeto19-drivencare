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
    try{
        const { email, password } = req.body;
        const token = await userService.signin({email, password});

        return res.status(200).send({token});
    }catch(error){
        return res.status(500).send(error.message);
    }
}

export default {signup, signin};