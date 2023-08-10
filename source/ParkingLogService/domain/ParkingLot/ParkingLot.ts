import { ParkingLotRepository } from '../../infrastructure/ParkingLotRepository';
import { Spot } from '../Spot/Spot';
import { Motorcycle } from '../Vehicles/Motorcycle';
import { Vehicle, VehicleType } from '../Vehicles/Vehicle';

enum ParkingLotType {
  Mixed = "Mixed",
  Specific = "Specific",
}

class ParkingLot {
  // @Em()
  private readonly repo!: ParkingLotRepository;
  private type: ParkingLotType;

  constructor(
    private spots: Spot[]
  ) {
    this.type =
      spots.every(spot => spot.type === spots[0].type)
        ? ParkingLotType.Specific
        : ParkingLotType.Mixed

    this.spots = spots;
  }

  public getType(): ParkingLotType {
    return this.type;
  }

  public getSpots(): Spot[] {
    return this.spots;
  }

  public remainSpots(): number {
    return this.getSpots().filter(spot => !spot.vehicle).length
  }

  public totalSpots(): number {
    return this.getSpots().length
  }

  public setVehicle(vehicle: Vehicle, spotNumber: number) {
    if (spotNumber < 0 || spotNumber >= this.spots.length) {
      throw new Error(`${spotNumber} is invalid spot number.`);
    }

    const spot = this.spots[spotNumber];

    if (spot.type < vehicle.type) {
      throw new Error(`Vehicle isn't suited.`);
    }

    if (spot.vehicle) {
      throw new Error(`Spot number ${spotNumber} is already occupied.`);
    }

    spot.vehicle = vehicle;
    return spot;
  }
}

const parkingLot = new ParkingLot([
  new Spot(VehicleType.Motorcycle),
  new Spot(VehicleType.Motorcycle),
  new Spot(VehicleType.Motorcycle),
  new Spot(VehicleType.Motorcycle),
  new Spot(VehicleType.Motorcycle)
]);

const vehicle = new Motorcycle();

parkingLot.setVehicle(vehicle, 4);

console.log(parkingLot);
