const {Sequelize,DataTypes}=require("sequelize");
const sequelize=new Sequelize('music','postgres','Chitkara@123',{
    host:'localhost',
    dialect:'postgres',
    logging:false,
    pool:{max:5,min:0,idle:10000}
});

sequelize.authenticate()
.then(()=>
{
    console.log("connected");
})
.catch(error=>
{
console.log("Error"+error);
})

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.sequelize.sync()
.then(()=>
{
    console.log("Yes");
})
.catch((error)=>
{
console.log("No");
});

db.users=require("../models/user")(sequelize,DataTypes);
 module.exports=db;