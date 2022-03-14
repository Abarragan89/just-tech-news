
const { Model, DataTypes } = require('sequelize');
// create our User model
class User extends Model {};

// define table columns and configuration
User.init(
    {
        // Table column definitions
        // id column
        id: {
            type: DataTypes.INTEGER,
            // same thing as 'NOT NULL'
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // user column
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // cannot be duplicates
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // password column
        password: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                // this means it must be at least 4 characters
                len: [4]
            }
        }
    },
    {
        // Table configuration options
        // Don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // Don't plurailze name of database talbe
        freezeTableName: true,
        // Use underscores instead of camel-casing
        underscored: true,
        // Make model name stay lowercase in database 
        modelName: 'user'
    }
);

module.exports = User;