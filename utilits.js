import { question } from "readline-sync";

export function pedir_numero(label = 'Digite um número: '){
    let numero = Number(question(label))
    
    while(isNaN(Number(numero)) || numero === ''){
        console.log('Valor inválido! Insira um número')
        numero = question(label)
    }
    
    return Number(numero)
}

export function enter_limpar_tela(){
    console.log(question('>>> Pressione Enter para continuar...'))
    console.clear()
}