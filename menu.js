import { question } from "readline-sync";
import { enter_limpar_tela, pedir_nome, pedir_numero } from "./utilits.js";
import fs from 'fs';

function main(){
    //cabeçalho
    cabecalho()
    let opcao = pedir_numero('\n>>> Digite um opção: ')
    enter_limpar_tela()

    let numeros_rifa = {}
    let rifa = inicializacao('rifa')
    let contador = 0
    let valor_plataforma = 0
    let quantidade_de_num_sorteados = 0
    let numero_de_pontos = 0
    while(opcao != 0){
        if(opcao === 1){
            
            numero_de_pontos = pedir_numero('Digite o número de pontos da rifa: ')
            enter_limpar_tela()
            numeros_rifa = {}
            for(let i = 1; i <= numero_de_pontos; i++){
                numeros_rifa = {
                    numero : i,
                    nome: '-',
                }
                rifa.push(numeros_rifa)
            }
        
        //numero 2    
        }else if(opcao === 2){
            console.log(rifa)
            const numero = pedir_numero('Em qual número deseja cadastrar? ')
            const nome_rifa = pedir_nome('Digite um nome: ')
            rifa[numero-1].nome = nome_rifa
            console.log('Nome inserido com sucesso!\n')
            contador++
            enter_limpar_tela()

        //numero 3
        }else if(opcao === 3){
            
            const valor_ponto = pedir_numero('Digite o valor do ponto da rifa: ')
            console.log('Valor do ponto cadastrado!')
            enter_limpar_tela()

        //numero 4
        }else if(opcao === 4){
            valor_plataforma = pedir_numero('Digite o valor de uso da plataforma (%): ')
            console.log('Valor cadastrado com sucesso!')
            enter_limpar_tela()

        //numero 5
        }else if(opcao === 5){
            console.log('Esses são os pontos da rifa e seus respectivos nomes: ')
            console.log(rifa)
            enter_limpar_tela()

        //numero 6
        }else if(opcao === 6){
            const valor_arrecadado = contador * valor_ponto
            const valor_da_plataforma = valor_arrecadado * (valor_plataforma/100)
            console.log(`Valor arrecadado é de R$${valor_arrecadado.toFixed(2)}`)
            console.log(`Valor para a plataforma é de R$${valor_da_plataforma.toFixed(2)}`)

        //numero 7
        }else if(opcao === 7){
            quantidade_de_num_sorteados = pedir_numero('Quantos números serão sorteados? ')

        //numero 8
        }else if(opcao === 8){
            let array_numeros_sorteados = []
            for (let i = 1; i<=quantidade_de_num_sorteados; i++){
                let num_sorteado = sortear_numero(1,numero_de_pontos)
                while(verificar_se_ja_tem(array_numeros_sorteados,num_sorteado)){
                    num_sorteado = sortear_numero(1, numero_de_pontos)
                    
                }

                console.log(`${i}º número sorteado - ${num_sorteado}`)
                console.log(`Ganhador: ${rifa[num_sorteado-1].nome}`)
                array_numeros_sorteados.push(num_sorteado)   
                
                
                                        
            }
            array_numeros_sorteados = []

        //numero 9
        }else if(opcao === 9){
            //Quantidade Pontos Disponíveis, Quantidade Pontos Vendidos, Não vendidos, Lista Pontos Vendidos e Não Vendidos
            let contador_num_disponivel = 0
            let contador_num_vendidos = 0
            let array_disponivesis = []
            let array_vendidos = []
            for(let i = 1; i<=numero_de_pontos; i++){
                if(rifa[i-1].nome === '-'){
                    contador_num_disponivel++
                    array_disponivesis.push(rifa[i-1])
                }else{
                    contador_num_vendidos++
                    array_vendidos.push(rifa[i-1])
                }
            }
            console.log(`------Dados Gerais-----`)
            console.log(`>>>Quantidade de números disponíveis: ${contador_num_disponivel}`)
            console.log(`>>>Lista de números disponíveis: `)
            console.log(array_disponivesis)
            console.log(`\n>>>Quantidade de números vendidos: ${contador_num_vendidos}`)
            console.log(`>>>Lista de números vendidos: `)
            console.log(array_vendidos)
        }




        //pedir de novo
        cabecalho()
        opcao = pedir_numero('\n>>> Digite um opção: ')
        enter_limpar_tela()
    }
    gravar_dados(rifa)
}

function inicializacao(rifa){
    const data = fs.readFileSync('rifa.txt', 'utf-8')
    const linhas = data.split('\n')

    for(let linha of linhas){
        if (!linha) continue

        //1#moacir
        const propriedades = line.split('#')
        //['1', 'moacir']
        const numeros_rifa = {'numero': propriedades[0],
                                'nome': propriedades[1]}
        rifa.push(numeros_rifa)
    }
    return rifa
}


function gravar_dados(rifa){
    let data = ''
    for (let m of rifa){
        data += `${m['numero']}#${m['nome']}\n`
    }

    fs.writeFileSync('rifa.txt', data)

}

function verificar_se_ja_tem(array_numeros_sorteados,num_sorteado){
    for(let item of array_numeros_sorteados){
        if(num_sorteado === item){
            return true
        }
        
    }
}
function sortear_numero(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min

}

function cabecalho(){
    console.log(`\n**** MENU - RIFA ****`)
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
    10 - Resetar
    0 - Sair
    `)
}

main()