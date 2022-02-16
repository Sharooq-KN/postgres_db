
const userOps = require('./crud');

function createUser(req, res) {
    let user = req.body;
    userOps.createUser(user).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findUserById(req, res) {
    userOps.findUserById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteUserById(req, res) {
    userOps.deleteUserById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "User deleted successfully",
                user: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateUser(req, res) {
    userOps.updateUser(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "User updated successfully",
                user: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAllUsers(req, res) {
    userOps.findAllUsers().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const userControllers = {
    createUser,
    findUserById,
    deleteUserById,
    updateUser,
    findAllUsers
}

module.exports = userControllers;