import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _numbOfInstances = 0;

  constructor(name: string) {
    super(name);
    Mage._numbOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._numbOfInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}