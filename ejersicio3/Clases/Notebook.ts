import Computadora from './Computadora'

export default class Notebook extends Computadora {   
    protected bateria:number;
    public constructor() {
      super();
      this.bateria=100;
    }
  }