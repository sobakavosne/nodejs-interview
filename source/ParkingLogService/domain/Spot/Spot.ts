import { Vehicle, VehicleType } from '../Vehicles/Vehicle';

export class Spot {
  public readonly type: VehicleType;
  public vehicle?: Vehicle;

  constructor(
    type: VehicleType
  ) {
    this.type = type;
  }
}