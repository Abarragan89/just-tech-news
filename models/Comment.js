'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}

Comment.init(
    {
        // columns
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }, 
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }

        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;