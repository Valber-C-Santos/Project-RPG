import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _numbOfInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._numbOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._numbOfInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}