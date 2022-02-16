const { sequelize } = require('../models');
const User = sequelize.import('../models/user')

function findAllUsers() {
    return User.findAll();
}

function findUserById(id) {
    return User.findByPk(id);
}

function deleteUserById(id) {
    return User.destroy({ where: { id: id } });
}

function createUser(user) {
    const newUser = new User(user);
    return newUser.save();
}

function updateUser(user, id) {
    const updateUser = {
        Email: user.Email,
        IsEmailVerified: user.IsEmailVerified,
        Password: user.Password,
        FirstName: user.FirstName,
        LastName: user.LastName,
        DOB: user.DOB,
        Mobile: user.Mobile,
        IsMobileVerified: user.IsMobileVerified,
        PhotoUrl: user.PhotoUrl,
        IsActive: user.IsActive,
        IsStaff: user.IsStaff,
        PermissionHex: user.PermissionHex,
        CreatedBy: user.CreatedBy,
        UpdatedBy: user.UpdatedBy
    };
    return User.update(updateUser, { where: { id } });
}

const userOps = {
    findAllUsers,
    createUser,
    findUserById,
    deleteUserById,
    updateUser
}

module.exports = userOps;