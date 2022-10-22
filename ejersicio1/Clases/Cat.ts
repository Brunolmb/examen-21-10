import Animal from './Animal'

export default class Cat extends Animal {   
    public constructor(name: string) {
      super(name);
    }
    
    public makeSound(): void {
      console.log('meow meow\n');
    }
}