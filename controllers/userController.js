const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    const allUsers = await userService.getAllUsers();

    if (allUsers)
        res.status(200).send({ status: "OK", data: allUsers });
    else
        res.status(400).send({ status: "FAILED", data: allUsers });
        
};

const getUser = async (req, res) => {
    let id = req.params.userId;
    try {
        const user = await userService.getUser(id);
        res.status(200).send({status: "ok", data: user });
    } catch (error) {
        res.status(500).send({status: "fallido", data:{error:error.message} });
        
    }
    

        
};

const createUser = async (req, res) => {
    const { body } = req;
    const createdUser = await userService.createUser(body.name, body.email, body.password);

    if (createdUser)
        res.status(200).send({ status: "OK", data: createdUser });
    else
        res.status(400).send({ status: "FAILED", data: createdUser });
};

const updateUser = async (req, res) => {
    let id = req.params.userId;
    const { name, email, password } = req.body;
    const updatedUser = await userService.updateUser(id, name, email, password);

    if (updatedUser)
        res.status(200).send({ status: "OK", data: updatedUser });
    else
        res.status(400).send({ status: "FAILED", data: updatedUser });
};

const deleteUser = async (req, res) => {
    let id = req.params.userId;
    const deletedUser = await userService.deleteUser(id);

    if (deletedUser)
        res.status(200).send({ status: "OK", data: deletedUser });
    else
        res.status(400).send({ status: "FAILED", data: deletedUser });
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
