function mapCar(carEntity) {
  const carMapped = {
    id: carEntity.id,
    brand: carEntity.brand,
    year: carEntity.year,
    color: carEntity.color,
    passengers: carEntity.passengers,
    model: carEntity.model,
    kms: carEntity.kilometers,
    airConditioning: carEntity.airConditioning,
    transmission: carEntity.transmission,
    createdAt: carEntity.createdAt,
  };
  return carMapped;
}

module.exports = mapCar;
