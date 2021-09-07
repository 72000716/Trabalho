let numeroConta = 0
let numeroOperacao = 0
let contas = {}

function gerarNumeroConta(){
    let numeroAtual = numeroConta.toString()
    while(numeroAtual.length < 4){
        numeroAtual = '0' + numeroAtual
    }
    return numeroAtual
}

function cadastrarConta(nome, dataNascimento){
    let numeroDaConta = gerarNumeroConta()
    let conta = {
        nome: nome,
        dataNascimento: dataNascimento,
        saldo: 1000.0
    }
    contas[numeroDaConta] = conta
    numeroConta++
    return numeroDaConta
}

function contaExiste(conta){
    return contas[conta]
}

function sacar(conta, valor){
    if(contaExiste(conta)){
        if(valor > 0){
            if(contas[conta].saldo >= valor){
                contas[conta].saldo -= valor
            }else{
                console.log('Saldo insuficiente')
            }
        }else{
            console.log('Valor inválido')
        }
    }else{
        console.log('Conta não encontrada')
    }
}

function depositar(conta, valor){
    if(contaExiste(conta)){
        if(valor > 0){
            contas[conta].saldo += valor
        }else{
            console.log('Valor inválido')
        }
    }else{
        console.log('Conta não encontrada')
    }
}

function informacoesDaConta(numero){
    if(contaExiste(numero)){
        console.log(contas[numero])
    }else{
        console.log('Conta não encontrada')
    }
}