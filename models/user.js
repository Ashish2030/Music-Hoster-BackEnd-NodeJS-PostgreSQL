module.exports=(sequelize,DataTypes)=>
{
    const Users=(sequelize.define("users",{
        username:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
        },
        firstname:DataTypes.STRING,
        lastname:DataTypes.STRING,
        password:DataTypes.STRING,
        mobile:DataTypes.NUMBER,
      

    },
    {
       updatedAt:false,
       createdAt:false
    }))
    return Users;
};