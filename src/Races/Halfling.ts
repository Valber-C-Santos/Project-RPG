import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints = 60; 
  private static _instaces = 0;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling._instaces += 1;
  }
  
  static createdRacesInstances(): number { return Halfling._instaces; }
  
  get maxLifePointss(): number { return this.maxLifePoints; }
}