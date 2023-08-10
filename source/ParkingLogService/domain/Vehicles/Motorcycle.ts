import { Vehicle, VehicleType } from './Vehicle';

export class Motorcycle implements Vehicle {
  public readonly type: VehicleType;

  constructor() {
    this.type = VehicleType.Motorcycle;
  }
}