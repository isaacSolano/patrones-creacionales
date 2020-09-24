export class Contexto{
    private operacion:String = "";
    private operador:any = 0;
    private resultado:any = 0;

    public getNumero(txtNumero:String):Number{
        switch(txtNumero){
            case "cero":
                return 0;
            
            case "uno":
                return 1;

            case "dos":
                return 2;
                
            case "tres":
                return 3;
                
            case "cuatro":
                return 4;
                
            case "cinco":
                return 5;
        }
    }

    public setOperador(operador:Number){
        this.operador = operador;
    }

    public getOperacion():String{
        return this.operacion;
    }

    public setOperacion(txtOperacion:String){
        switch(txtOperacion){
            case "suma":
                this.operacion = "+";
                break;
                
            case "resta":
                this.operacion = "-";
                break;
                
            case "multiplicacion":
                this.operacion = "*";
                break;
                
            case "division":
                this.operacion = "/";
                break;
        }
    }

    public calcular():void{
        switch(this.operacion){
            case "+":
                this.resultado = this.resultado + this.operador;
                break;
                
            case "-":
                this.resultado = this.resultado - this.operador;
                break;
                
            case "*":
                this.resultado = this.resultado * this.operador;
                break;
                
            case "/":
                this.resultado = this.resultado / this.operador;
                break;

            default:
                this.resultado = this.operador;
                break;
        }
    }

    public getResultado(){
        return this.resultado;
    }
}