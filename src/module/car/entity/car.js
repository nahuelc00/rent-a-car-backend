class Car {
  constructor(car) {
    this.id = car.id;
    this.brand = car.brand;
    this.year = car.year;
    this.color = car.color;
    this.passengers = car.passengers;
    this.model = car.model;
    this.kilometers = car.kilometers;
    this.airConditioning = car.air_conditioning;
    this.transmission = car.transmission;
    this.createdAt = car.created_at;
  }
}

module.exports = Car;
