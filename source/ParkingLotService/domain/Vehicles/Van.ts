import { Vehicle, VehicleType } from './Vehicle';

export class Van implements Vehicle {
  public readonly type: VehicleType;

  constructor() {
    this.type = VehicleType.Van;
  }
}