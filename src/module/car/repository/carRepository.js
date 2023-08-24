const Car = require('../entity/car');

class CarRepository {
  constructor(carModel) {
    this.carModel = carModel;
  }

  async getAll() {
    const cars = (await this.carModel.findAll()).map((car) => car.toJSON());
    const carsEntities = cars.map((car) => new Car(car));
    return carsEntities;
  }

  async getById(id) {
    const car = (await this.carModel.findByPk(id)).toJSON();
    const carEntity = new Car(car);
    return carEntity;
  }

  async save(carToSave) {
    const newCar = this.carModel.build(carToSave);

    await newCar.save();

    return new Car(newCar.toJSON());
  }

  async update(carToUpdate) {
    const car = await this.carModel.findByPk(carToUpdate.id);

    car.brand = carToUpdate.brand;
    car.year = carToUpdate.year;
    car.color = carToUpdate.color;
    car.passengers = carToUpdate.passengers;
    car.model = carToUpdate.model;
    car.kilometers = carToUpdate.kilometers;
    car.air_conditioning = carToUpdate.air_conditioning;
    car.transmission = carToUpdate.transmission;

    await car.save();

    return new Car(car.toJSON());
  }

  async delete(id) {
    const car = await this.carModel.findByPk(id);

    await car.destroy();

    return new Car(car.toJSON());
  }
}

module.exports = CarRepository;
