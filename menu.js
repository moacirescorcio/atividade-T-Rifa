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
            
            const numero_de_pontos = pedir_numero('Digite o número de pontos da rifa: ')
            enter_limpar_tela()
            let numeros_rifa = {}
            for(let i = 1; i <= numero_de_pontos; i++){
                numeros_rifa = {
                    numero : i,
                    nome: '-',
                }
                rifa.push(numeros_rifa)
            }
            
        }else if(opcao === 2){
            console.log(rifa)
            const numero = pedir_numero('Em qual número deseja cadastrar? ')
            const nome_rifa = question('Digite o nome: ')
            rifa[numero-1].nome = nome_rifa
            console.log('Nome inserido com sucesso!')
            enter_limpar_tela()
        }else if(opcao === 3){
            
            const valor_ponto = pedir_numero('Digite o valor do ponto da rifa: ')
            console.log('Valor do ponto cadastrado!')
            enter_limpar_tela()
        }else if(opcao === 4){
            const valor_plataforma = pedir_numero('Digite o valor de uso da plataforma (%): ')
            console.log('Valor cadastrado com sucesso!')
            enter_limpar_tela()
        }else if(opcao === 5){
            console.log('Esses são os pontos da rifa e seus respectivos nomes: ')
            console.log(rifa)
            enter_limpar_tela()
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