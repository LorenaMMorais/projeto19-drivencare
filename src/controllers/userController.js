import httpStatus from "http-status";
import userService from "../services/userService.js";

async function signup(req, res, next){
    const {name, email, password, typeUser} = req.body;

    try {
        await userService.signup({ name, email, password, typeUser });
        return res.sendStatus(httpStatus.CREATED);
    } catch(error){
        return res.status(500).send(error.message);
        next(error);
    }
}

async function signin(req, res, next){
    try{
        const { email, password } = req.body;
        const token = await userService.signin({email, password});

        return res.status(200).send({token});
    }catch(error){
        return res.status(httpStatus.OK).send(error.message);
        next(error);
    }
}

export default {signup, signin};