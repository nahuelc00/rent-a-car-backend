class CarService {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }

  async getCars() {
    const cars = await this.carRepository.getAll();
    return cars;
  }

  async getCar(id) {
    const car = await this.carRepository.getById(id);
    return car;
  }

  async saveCar(carToSave) {
    const carSaved = await this.carRepository.save(carToSave);
    return carSaved;
  }

  async updateCar(carToUpdate) {
    const carUpdated = await this.carRepository.update(carToUpdate);
    return carUpdated;
  }

  async deleteCar(id) {
    const carDeleted = await this.carRepository.delete(id);
    return carDeleted;
  }
}

module.exports = CarService;
