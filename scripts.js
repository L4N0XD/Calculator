function calculadora() {
    const operacao = Number(prompt('Escolha uma operacao:\n 1 - Subtracão  (-)\n 2 - Soma (+)\n 3 - Divisão Real (/)\n 4 - Divisão inteira (%)\n 5 - Multiplicacão (*)\n 6 - Potenciacão (**)\n 7 - Comparar (=)'));
    
if (!operacao || operacao >= 8){
    alert('Erro - Operacao inválida!');
    calculadora(); 
}else {
    let n1 = Number(prompt('Digite o primeiro valor'));
    let n2 = Number(prompt('Digite o segundo valor'));
    let resultado;

    if (!n1 || !n2) {
        alert('Erro - Parametros inválidos!');
        calculadora();}
    else {

    function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    novaoperacao();
    }

    function comparanumeros () {
        a = n1;
        b = n2;
        res = a + b
        let primeiraFrase = `Os números ${a} e ${b}`;
        let simNao = 'não'
        let segundafrase = `Sua soma é ${res}`;
        let dez = 'menor que'
        let vinte = 'maior que'
        
        if (a === b) {
            simNao = ''
        }
        if (res > 10) {
            dez = 'maior que'
        } else if (res == 10) {
            dez = 'igual a '}
        
            if (res < 20) {
            vinte  = 'menor que'
        } else if (res == 20) {
            vinte = 'igual a'
        }
        alert(`${primeiraFrase} ${simNao} são iguais! ${segundafrase}, que é ${dez} dez e ${vinte} vinte.`);
        novaoperacao();
    }      

    function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaoperacao();
    }
    function DivisaoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaoperacao();
    }
    function DivisaoInteira() {
    resultado = n1 % n2;
    alert(`${n1} % ${n2} = ${resultado}`);
    novaoperacao();
    }
    function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    novaoperacao();
    }
    function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} ** ${n2} = ${resultado}`);
    novaoperacao();
    }
    function novaoperacao() {
    let opcao = prompt('Deseja fazer outra operacão?\n 1 - Sim\n 2 - Não');
    if (opcao == 1) {
        calculadora();
    }else if (opcao == 2) {
    alert('Até Mais!')
    }else {
    alert('Digite uma opcão válida')
    novaoperacao();
    }
    }
    if (operacao == 1){
    subtracao();
    }else if (operacao == 2){
    soma();
    }else if (operacao == 3){
    DivisaoReal();
    }else if (operacao == 4){
    DivisaoInteira();
    }else if (operacao == 5){
    multiplicacao();
    }else if (operacao == 6){
    potenciacao();
    } else if (operacao == 7){
    comparanumeros();}
    }
    }

}


calculadora();
