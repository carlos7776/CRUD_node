const db = require('../models');

const getAllUsers = async () => {
    try {
        let users = await db.User.findAll();
        return users;
    } catch(error) {
        return error.message || "Failed to get users";
    }
};

const getUser = async (id) => {
    try {
        let user = await db.User.findByPk(id);
        return user;
    } catch(error) {
        return {status: 500, message: error.message || "fallo el ingreso de usuario"}
    }
};

const createUser = async (name, email, password) => {
    try {
        let newUser = await db.User.create(
            {
                name,
                email,
                password,
            }
        );
        return newUser;
    } catch(error) {
        return error.message || "Failed to create user";
    }
};

const updateUser = async (id, name, email, password) => {
    try {
        let updatedUser = await db.User.update({
            id,
            name,
            email,
            password,
        }, {
            where: {
                id,
            }
        });
        return updatedUser;
    } catch(error) {
        return error.message || "user could not be updated";
    }
};

const deleteUser = async (id) => {
    try {
        const deletedUser = await db.User.destroy({
            where: {
                id,
            }
        });
        return deletedUser;
    } catch(error) {
        return error.message || "User could not be deleted";
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};