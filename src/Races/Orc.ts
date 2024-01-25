import Race from './Race';

export default class Orc extends Race {
  maxLifePoints = 74; 
  private static _instaces = 0;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc._instaces += 1;
  }
  
  static createdRacesInstances(): number { return Orc._instaces; }
  
  get maxLifePointss(): number { return this.maxLifePoints; }
}