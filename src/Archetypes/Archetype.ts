import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  protected readonly _special: number = 0;
  protected readonly _cost: number = 0;

  constructor(name: string) { 
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}
