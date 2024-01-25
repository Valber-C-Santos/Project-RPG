export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) {
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get name(): string {
    return this._name;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
