import { deco01, deco02, deco03 } from './decorators';

//@deco01
//@deco02({ a: 'soma', b: 4 })
@deco03
export class Person {
  private name: string;
  private idade: number;

  public constructor(name: string, idade: number) {
    this.name = name;
    this.idade = idade;
  }

  public getName(): string {
    return this.name;
  }
  public getIdade(): number {
    return this.idade;
  }
}
