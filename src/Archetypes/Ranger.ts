import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _Instances = 0;

  constructor(name: string) {
    super(name);
    Ranger._Instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._Instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}