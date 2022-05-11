import { count } from 'console'
import {readFileSync} from 'fs' 
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const palavras = load_words('palavras.txt')

    menubar()

    let option = Number(input('Digite aqui a opção de seu desejo:'))

    while(option != 0){
        if(option === 1){
            more_than_n_letters(palavras)
    }else if(option === 2){
            show_and_count_words_with_no_e(palavras)
    }else if(option === 3){
            count_words_without_avoids_letters(palavras)
    }else if(option === 4){
            count_words_with_asked_letters(palavras)
    }else if(option === 4){
            show_words_with_all_asked_letters(palavras)
    }
    const enter = input('type <enter> to continue')
    console.clear()
    menubar()
    option = Number(input('Digite aqui a opção de seu desejo:'))
    }
}
function menubar(){
    console.log('#### ROGERIO PLAY ####',
    '\n0 - To quit',
    '\n1 - Imprimir somente palavras com mais de n caracteres',
    '\n2 - Imprimir palavras sem uma determinada letra',
    '\n3 - Imprimir palavras que não possuem determinada sequência de letras',
    '\n4 - Imprimir somente as palvras com as letras pedidas',
    '\n5 - Imprimir a palavra se possuir todas as letras pedidas')
}
function more_than_n_letters(palavras){
    const numero_de_letras = input('Qual o número letras que a palavra deve ter a mais:')
    let count = 0
    const total_words = palavras.length
    for(let word of palavras){
        if(word.length > numero_de_letras){
            console.log(word)
            count++
        }
    }
    const percentual = (count/total_words)*100
    console.log(`O percentual de palavras com mais de ${numero_de_letras} é ${percentual.toFixed(4)}% e a quantidade de palavras é ${count} `)
}
function load_words(filename){
    const file = readFileSync(filename, {encoding: 'utf-8'})
    const loaded_words = file.split('\n')

    return loaded_words
}
function show_and_count_words_with_no_e(palavras){
    let count = 0
    const total_words = palavras.length
    const letra_escolhida = input('Digite aqui a letra escolhida:')

    for(let word of palavras){
        if(has_no_e(word, letra_escolhida)){
            count++
            console.log(word)
        }
    }
    const percentual = (count/total_words)*100
    console.log(`O percentual de palavras sem a letra é ${percentual.toFixed(4)}% e a quantidade de palavras é ${count} `)
}
function has_no_e(word, letra_escolhida){
   //const letra_escolhida = input('Digite aqui a letra escolhida:')
    for(let letter of word){
        if(letter === letra_escolhida){
            return false
        }
    }
    return true
}
function count_words_without_avoids_letters(palavras){
    const chosen_letters = input('Digite as letras que não devem aparecer:')
    let count = 0
    for(let word of palavras){
        if(avoid(word, chosen_letters)){
             count++
             console.log(word)

        }
    }
    console.log(`O número de palavras sem ${chosen_letters} é ${count}.`)

}
function avoid(word, chosen_letters){
    for (let letter of chosen_letters){
        if(existe(letter, word)){
            return false
        }
    }
    return true
}
function existe(letter, word){
    for(let words of word){
        if (words === letter){
            return true
        }
    }
}
function count_words_with_asked_letters(palavras){
    const chosen_word = input('Digite aqui as letras que a palavra deve ter:')
    let count = 0
    for(let word of palavras){
        if(uses_only(word, chosen_word)){
            count++
            console.log(word)

        }
    }
    console.log(`O número de palavras com ${chosen_word} é ${count}`)

}
function uses_only(word, chosen_word){
    for(let letters of chosen_word){
        if(contains_words(letters, word)){
            return true
        }
    }
return false
}
function contains_words(letters, word){
    for (let words of word){
        if (letters === words){
            return true
        }
    }
    return false
}
function show_words_with_all_asked_letters(palavras){
    for (let words of palavras){
        if (uses_all(words)){
           return console.log(words)
        }
    }
}
function uses_all(words){
    const letras_escolhidas = input('Digite aqui as letras escolhidas:')
    for(let letters of words){
        if(contains_all(letters, letras_escolhidas)){
            return true
        }
    }
    return false
}
function contains_all(letters, letras_escolhidas){
    for (let letras of letras_escolhidas){
        if (){

        }
    }
}
main()