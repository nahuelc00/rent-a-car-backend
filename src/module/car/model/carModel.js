const { Model, DataTypes } = require('sequelize');

class Car extends Model { }

function initCarModel(sequelize) {
  Car.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    color: {
      type: DataTypes.STRING,
    },
    passengers: {
      type: DataTypes.INTEGER,
    },
    model: {
      type: DataTypes.STRING,
    },
    kilometers: {
      type: DataTypes.INTEGER,
    },
    air_conditioning: {
      type: DataTypes.BOOLEAN,
    },
    transmission: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Car',
    tableName: 'cars',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return Car;
}

module.exports = initCarModel;
