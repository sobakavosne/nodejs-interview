import { Vehicle, VehicleType } from './Vehicle';

export class Car implements Vehicle {
  public readonly type: VehicleType;

  constructor() {
    this.type = VehicleType.Car;
  };
}