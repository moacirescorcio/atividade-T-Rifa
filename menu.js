import { question } from "readline-sync";
import { enter_limpar_tela, pedir_numero } from "./utilits.js";

function main(){
    //cabeçalho
    cabecalho()
    let opcao = pedir_numero('\n>>> Digite um opção: ')
    enter_limpar_tela()

    
    let rifa = []
    while(opcao != 0){
        if(opcao === 1){
            cabecalho()
            const numero_de_pontos = pedir_numero('Digite o número de pontos da rifa: ')
            let numeros_rifa = {}
            for(let i = 1; i <= numero_de_pontos; i++){
                numeros_rifa = {
                    numero : i,
                    nome: '-',
                }
                rifa.push(numeros_rifa)
            }
            
        }else if(opcao === 2){
            console.log(`\n${rifa}`)
            const numero = pedir_numero('Em qual número deseja cadastrar? ')
            const nome = question('Digite o nome: ')
            rifa[numero-1][numero]
        }




        //pedir de novo
        cabecalho()
        opcao = pedir_numero('\n>>> Digite um opção: ')
        enter_limpar_tela()
    }
}

function cabecalho(){
    console.log(`**** MENU - RIFA ****`)
    console.log(`
    1 - Cadastrar número de pontos
    2 - Cadastrar pessoas nos pontos
    3 - Valor do ponto
    4 - Valor da plataforma
    5 - Listar pontos 
    6 - Calcular valor arrecadado
    7 - Quantos números serão sorteados
    8 - Sortear número(s)
    9 - Dados Gerais
    0 - Sair
    `)
}

main()