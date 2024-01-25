import Race from './Race';

export default class Elf extends Race {
  maxLifePoints = 99; 
  private static _instaces = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf._instaces += 1;
  }

  static createdRacesInstances(): number { return Elf._instaces; }

  get maxLifePointss(): number { return this.maxLifePoints; }
}