const Nome = document.getElementById('nome');
const gif = document.querySelector('#gif')
let botao = document.querySelector('#alterar')

botao.addEventListener('click', () => {

    if (botao.value == 'primeiro') {
        gif.src = './2pontas.gif'
        Nome.innerText = 'sharingan de 2 pontas'
        botao.value = 'segundo'
    } else if (botao.value == 'segundo') {
        gif.src = './3pontas.gif'
        Nome.innerText = 'sharingan de 3 pontas'
        botao.value = 'terceiro'
    } else if (botao.value == 'terceiro') {
        gif.src = './magenkyou.gif'
        Nome.innerText = 'magenkyou sharingan'
        botao.value = 'quarto'
    } else if (botao.value == 'quarto') {
        gif.src = './magenkyouEternal.gif'
        Nome.innerText = 'Eterno magenkyou sharingan'
        botao.value = 'quinto'
    } else {
        gif.src = './1ponta.gif'
        Nome.innerText = 'sharingan de 1 ponta'
        botao.value = 'primeiro'
    }
})