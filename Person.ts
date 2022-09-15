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
