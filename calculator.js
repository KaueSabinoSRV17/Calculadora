// // Variáveis e Funções
//     // Elementos DOM
//             let tela = document.querySelector('#tela')
//             let numbers = document.querySelectorAll('.number')
//             let operators = document.querySelectorAll('.operator')
//             let zero = document.querySelector('.zero')
//             let equal = document.querySelector('.igual')
//             let c = document.querySelector('.c')
//             let backspace = document.querySelector('.backspace')
//         // Início das variaveis
//             let number = ''
//     // Eventos
//         // Adiciona os números na tela e na operação, e também limpa a tela e a operação caso a ultima operação tenha terminado
//             numbers.forEach((e) => {
//             e.addEventListener('click', () => {
//                     if (number.includes('=')) {
//                         tela.innerText = ''
//                         number = ''
//                     }
//                     if (number.includes('+')) {
//                         tela.innerText = ''
//                         tela.innerText += e.innerText
//                     }                    
//                 })
//             })
//         // Adiciona o que estiver na tela a string principal, limpa a tela e adiciona o operador a string principal
//             operators.forEach((e) => {
//                 e.addEventListener('click', () => {
//                     if (e.innerText == 'x') {
//                         number += tela.innerText
//                         number += '*'
//                     } else {
//                         number += tela.innerText
//                         number += e.innerText
//                     }
//                 })
//             })          
//         // Calcula a String formada pela tela e a exibe 
//             equal.addEventListener('click', () => {
//                 number += tela.innerText
//                 tela.innerText = eval(number)
//                 number += equal.innerText
//             })
//         // Limpa a Operação e Tela
//             c.addEventListener('click', () => {
//                 tela.innerText = ''
//                 number = ''
//             })
//         // Apaga apenas um número da Tela e da Operação
//             backspace.addEventListener('click', () => {
//                 tela.innerText = tela.innerText.substring(0, tela.innerText.length - 1)
//                 number = number.substring(0, number.length - 1)
//             })
