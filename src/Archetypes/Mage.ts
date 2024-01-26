import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _Instances = 0;

  constructor(name: string) {
    super(name);
    Mage._Instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._Instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}