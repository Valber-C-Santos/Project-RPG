import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints = 80; 
  private static _instaces = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf._instaces += 1;
  }

  static createdRacesInstances(): number { return Dwarf._instaces; }

  get maxLifePointss(): number { return this.maxLifePoints; }
}