import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static Instances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.Instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.Instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}