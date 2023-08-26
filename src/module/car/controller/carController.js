const mapCar = require('../mapper/carMapper');
const buildCarForDB = require('../utilities');

class CarController {
  constructor(carService) {
    this.carService = carService;
  }

  setupRoutes(app) {
    app.get('/', async (req, res) => {
      const cars = await this.carService.getCars();
      const carsMapped = cars.map((car) => mapCar(car));
      res.statusCode = 200;
      res.send(carsMapped);
    });

    app.get('/car/:id', async (req, res) => {
      const carId = Number(req.params.id);
      const car = await this.carService.getCar(carId);
      const carMapped = mapCar(car);
      res.statusCode = 200;
      res.send(carMapped);
    });

    app.post('/cars', async (req, res) => {
      const carToSave = req.body;

      const carForDB = buildCarForDB(carToSave);

      const carSaved = await this.carService.saveCar(carForDB);

      const carMapped = mapCar(carSaved);

      res.statusCode = 201;
      res.send(carMapped);
    });

    app.put('/cars', async (req, res) => {
      const carToUpdate = req.body;

      const carForDB = buildCarForDB(carToUpdate);

      const carUpdated = await this.carService.updateCar(carForDB);

      const carMapped = mapCar(carUpdated);

      res.statusCode = 200;
      res.send(carMapped);
    });

    app.delete('/car/:id', async (req, res) => {
      const carId = Number(req.params.id);
      const carDeleted = await this.carService.deleteCar(carId);
      const carMapped = mapCar(carDeleted);
      res.statusCode = 200;
      res.send(carMapped);
    });
  }
}

module.exports = CarController;
