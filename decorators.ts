export function deco01(target) {
  console.log(target, 'Deco01');
}

export function deco02(obj: { a: String; b?: number }) {
  return function (_: Function): void {
    console.log(obj.a + ' ' + obj.b);
  };
}

type Constructor = { new (...args: any[]): {} };

export function deco03(constructor: Constructor) {
  console.log('Caregando deco...');
  return class extends constructor {
    constructor(...args: any[]) {
      console.log('Antes.......');
      super(...args);
      console.log('Depois............');
    }
  };
}
