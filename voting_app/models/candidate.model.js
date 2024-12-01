module.exports = (sequelize, DataTypes) => {
     const Candidate = sequelize.define('Candidate', {
       name: { type: DataTypes.STRING, allowNull: false },
       party: { type: DataTypes.STRING, allowNull: false },
     });
     return Candidate;
   };
   