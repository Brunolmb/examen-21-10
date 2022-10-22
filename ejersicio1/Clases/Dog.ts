import Animal from './Animal'

export default class Dog extends Animal {   
    public constructor(name: string) {
      super(name);
    }
    
    public makeSound(): void {
      console.log ('wuff wuff\n');
    }
}