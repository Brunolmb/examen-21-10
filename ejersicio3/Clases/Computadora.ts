export default class Computadora {
    protected prendida: boolean;
   
    public constructor() {
      this.prendida = true;
    }
    public prenderApagar():void{
      if(this.prendida){
        this.prendida=false;
      } else { 
        this.prendida=true;
      }
    }
}