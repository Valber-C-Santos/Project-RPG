import Race from './Races/Race';
import Archetype from './Archetypes/Archetype';
import Energy from './Energy';
import Fighter from './Fighter';
import { Elf } from './Races';
import { Mage } from './Archetypes';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, getRandomInt(1, 10));
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get lifePoints() {
    return this._lifePoints;
  }
    
  get strength() {
    return this._strength;
  }
    
  get defense() {
    return this._defense;
  }
    
  get race() {
    return this._race;
  }
    
  get archetype() {
    return this._archetype;
  }
    
  get dexterity() {
    return this._dexterity;
  }
    
  get energy() {
    return { ...this._energy };
  }
  
  receiveDamage(attackPoints: number) {
    const damageReceived = attackPoints - this._defense;

    if (damageReceived > 0) {
      this._lifePoints -= damageReceived;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const newValues = getRandomInt(1, 10);

    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);

    if (this._maxLifePoints + newValues > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints += newValues;
      this._lifePoints += newValues;
    }

    this._energy.amount = 10;
  }
}