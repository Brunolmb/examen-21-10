import Computadora from './Computadora'

export default class Escritorio extends Computadora {   
    protected enchufada:boolean;
    public constructor() {
      super();
      this.enchufada=true;
    }
    
    public enchufarDesenchufar():void{
      if(this.enchufada){
        this.enchufada=false;
      } else { 
        this.enchufada=true;
      }
    }
}