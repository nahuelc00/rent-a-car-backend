function buildCarForDB(car) {
  const carBuilded = {
    id: car.id,
    brand: car.brand,
    year: car.year,
    color: car.color,
    passengers: car.passengers,
    model: car.model,
    kilometers: car.kilometers,
    air_conditioning: car.airConditioning,
    transmission: car.transmission,
  };
  return carBuilded;
}

module.exports = buildCarForDB;
