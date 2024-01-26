import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _Instances = 0;

  constructor(name: string) {
    super(name);
    Warrior._Instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._Instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}