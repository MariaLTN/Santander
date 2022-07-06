class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valorSaldo) {
        this._saldo = valorSaldo;
    }

    sacar(valorSacar) {
        if (valorSacar > this._saldo || valorSacar < 0) {
            return "Saque Inválido;"
        } this._saldo -= valorSacar;
    }

    depositar(valorDeposito) {
        if (valorDeposito < 0) {
            return "Deposito inválido;" 
        } 
        this._saldo += valorDeposito;
    }

    extratoBancario(){
        return `O cliente da agencia ${this.agencia} do número ${this.numero} do tipo ${this.tipo} possui o saldo ${this._saldo};`
    }
}



class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = "Conta Corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get CartaoCredito(){
        return this._cartaoCredito;
    }

    set CartaoCredito(cc){
        this._cartaoCredito = cc;
    }
}



class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "Conta Poupança";
    }
}




class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "Conta Universitária";
    }

    sacar(valorSaque) {
        if (valorSaque>500 || valorSaque<0){
            return "Saque inválido, apenas saques máximo de R$500,00;"
        } this._saldo -= valorSaque;
    }
}

