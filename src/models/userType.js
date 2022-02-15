const userType = (sequelize, DataTypes) => {
  const UserType = sequelize.define('userType', {
    type: DataTypes.STRING(10),
  });

  return UserType;
};

module.exports = userType;
