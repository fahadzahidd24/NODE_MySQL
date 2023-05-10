module.exports = (sequelizeDb, DataTypes)=>{
    sequelizeDb.define("Contact", {
        permanent_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        current_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        createdAt: false
    })
}