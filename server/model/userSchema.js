import { DataTypes, Sequelize } from "sequelize";

export const createUserModel=(sequelize)=>{

    const User=sequelize.define('User',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            isLowercase:true,
            unique:true
        },
        designation:{
            type:DataTypes.STRING,
            allowNull:false
        },
        empId:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        }
    });
    return User;
}