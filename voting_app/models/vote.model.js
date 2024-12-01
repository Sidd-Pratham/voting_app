module.exports = (sequelize, DataTypes) => {
     const Vote = sequelize.define('Vote', {
       id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
     });
     return Vote;
   };
   