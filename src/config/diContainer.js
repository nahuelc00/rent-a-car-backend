const { Sequelize } = require('sequelize');
const {
  default: DIContainer, object, use, factory,
} = require('rsdi');
const CarController = require('../module/car/controller/carController');
const CarRepository = require('../module/car/repository/carRepository');
const CarService = require('../module/car/service/carService');
const initCarModel = require('../module/car/model/carModel');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.PATH_DB,
  logging: console.log,
});

function setupCarModel() {
  const carModel = initCarModel(sequelize);
  carModel.sync();
  return carModel;
}

function addClubModelInContainer(container) {
  container.add({
    CarModel: factory(setupCarModel),
  });
}

function configureDI() {
  const container = new DIContainer();

  addClubModelInContainer(container);

  container.add({
    CarRepository: object(CarRepository).construct(container.get('CarModel')),
    CarService: object(CarService).construct(use(CarRepository)),
    CarController: object(CarController).construct(use(CarService)),
  });

  return container;
}

module.exports = configureDI;
