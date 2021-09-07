let numeroConta = 0
let numeroOperacao = 0
let contas = {}

function gerarNumeroConta() {
    let numeroAtual = numeroConta.toString()
    while (numeroAtual.length < 4) {
        numeroAtual = '0' + numeroAtual
    }
    return numeroAtual
}

function cadastrarConta(nome, dataNascimento) {
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

function contaExiste(conta) {
    return contas[conta]
}

function sacar(conta, valor) {
    if (contaExiste(conta)) {
        if (valor > 0) {
            if (contas[conta].saldo >= valor) {
                contas[conta].saldo -= valor
            } else {
                console.log('Saldo insuficiente')
            }
        } else {
            console.log('Valor inválido')
        }
    } else {
        console.log('Conta não encontrada')
    }
}

function depositar(conta, valor) {
    if (contaExiste(conta)) {
        if (valor > 0) {
            contas[conta].saldo += valor
        } else {
            console.log('Valor inválido')
        }
    } else {
        console.log('Conta não encontrada')
    }
}

function informacoesDaConta(numero) {
    if (contaExiste(numero)) {
        console.log(contas[numero])
    } else {
        console.log('Conta não encontrada')
    }
}

function MenuPrincipal() {
    let tecla
    cadastrarConta()

    do {
        Console.log()
        Console.log("Pressione qualquer tecla para continuar")

        Console.ReadKey()

        Console.Clear()

        Console.log("----------------------")
        Console.log("    F2    |   EXTRATO ")
        Console.log("----------------------")
        Console.log("    F3    |    SAQUE  ")
        Console.log("----------------------")
        Console.log("    F4    |  DÉPOSITO ")
        Console.log("----------------------")
        Console.log("   ESC    |    SAIR   ")
        Console.log("----------------------")
        tecla = Console.ReadKey();
        Console.log("");

        switch (tecla.Key) {
            case ConsoleKey.F2:
                informacoesDaConta()
                break;

            case ConsoleKey.F3:
                sacar()
                break;

            case ConsoleKey.F4:
                depositar()
                break;

            case ConsoleKey.Escape:
                Console.log("Saindo do programa!")
                break;

            default:
                break;
        }

    } while (tecla.Key != ConsoleKey.Escape)
}

MenuPrincipal()

