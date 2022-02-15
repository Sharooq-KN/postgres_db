const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    Email: DataTypes.STRING(255),
    IsEmailVerified: DataTypes.BOOLEAN,
    Password: DataTypes.STRING(255),
    FirstName: DataTypes.STRING(255),
    LastName: DataTypes.STRING(255),
    DOB: DataTypes.DATE,
    Mobile: DataTypes.STRING(10),
    IsMobileVerified: DataTypes.BOOLEAN,
    PhotoUrl: DataTypes.STRING(255),
    IsActive: DataTypes.BOOLEAN,
    IsStaff: DataTypes.BOOLEAN,
    PermissionHex: DataTypes.STRING(process.env.ROLE_MODULE_COUNT),
    CreatedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.import('./userType'),
        key: "id"
      }
    },
    UpdatedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.import('./userType'),
        key: "id"
      }
    }
  });

  User.belongsTo(sequelize.import('./userType'), { foreignKey: 'UserTypeID', constraints: false });

  return User;
};

module.exports = user;
