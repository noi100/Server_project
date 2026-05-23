import { getAllUsers,getUserById,createtUser,updateUser,removeUser } from "../services/user.services.js"


export async function getUsers(req, res,next) {
    try{
        const users = await getAllUsers()
        res.json(users)
    }
    catch(err){
        next(err)
    }
}

export async function getUser(req, res,next) {
    try{
        const id = req.params.id
        const user =await getUserById(id)
        res.json(user)
    }
    
    catch(err){
        next(err)
    }
}

export async function postUser(req, res,next) {
    try{
        const user = req.body
        await createtUser(user)
        res.status(201)
        res.send('User added')
    }
    catch(err)
    {
        next(err)
    }
    
}

export async function deleteUser(req,res,next) {
    try{
        const id = req.params.id;
        await removeUser(id);
        res.send('The user was deleted');
    }
    catch(err)
    {
        next(err)
    }
    

}

export async function putUser(req,res,next) {
    try{
        const id = req.params.id; // לקיחת ה-id מהפרמס
        const userData = req.body;
        const updated = await updateUser(id, userData);
        res.json({ message: 'The user was updated', data: updated });
    } catch (err) {
        next(err);
    }

}