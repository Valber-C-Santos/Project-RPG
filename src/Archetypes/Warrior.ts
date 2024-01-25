import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _numbOfInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._numbOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._numbOfInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}