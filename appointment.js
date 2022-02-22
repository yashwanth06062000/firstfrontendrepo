const dbs=require('../util/db')
const sequelize=require('sequelize')
const user=dbs.define('User',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    email:{
        type:sequelize.STRING,
        allowNull:false
    },
    phoneno:{
        type:sequelize.STRING,
        allowNull:false
    }
})
module.exports=user;