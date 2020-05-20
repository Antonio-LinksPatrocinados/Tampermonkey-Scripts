// ==UserScript==
// @name         Equation Solver
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Solve the math of All In One WP Security
// @author       António Silva
// @include      */admin/*
// @include      */wp-admin/
// @include      */admin
// @updateURL    https://raw.githubusercontent.com/Antonio-LinksPatrocinados/Tampermonkey-Scripts/master/MathSolver/MathSolver.user.js
// @downloadURL  https://raw.githubusercontent.com/Antonio-LinksPatrocinados/Tampermonkey-Scripts/master/MathSolver/MathSolver.user.js
// @grant        none
// ==/UserScript==
var equacao;
var equacao_to_divide;
var equacao_array_plus;
var equacao_array;
var equacao_array_times;
var equacao_array_minus;
var first_number;
var second_number;
var operator;
var resultado;
(
function() {
//'use strict';
if ( document.getElementById('loginform') ) {
if ( document.getElementsByClassName("aiowps-captcha-equation").length ) {

    var equacao = document.getElementsByClassName("aiowps-captcha-equation")[0].innerText;
    //console.log('1st ' + equacao);
    var equacao_to_divide = equacao.split(' = ');
    //console.log('2nd ' + equacao_to_divide);


    if (equacao_to_divide[0].includes(' + ')) {
        var equacao_array = equacao_to_divide[0].split(' + ');
        //console.log('split plus: ' + equacao_array);
        var operator = '+';
    }
    else if (equacao_to_divide[0].includes(' × ')) {
        var equacao_array = equacao_to_divide[0].split(' × ');
        //console.log('split times: ' + equacao_array);
        var operator = '*';
    }
    else if (equacao_to_divide[0].includes(' − ')) {
        var equacao_array = equacao_to_divide[0].split(' − ');
        //console.log('split minus: ' + equacao_array);
        var operator = '-';
    }

//console.log(equacao_to_divide);
//console.log(equacao_array);



if ( document.getElementsByClassName('forgetmenot')[0].children[0].innerText.trim() == 'Lembrar-me' ) {

// verificar primeiro numero
if (equacao_array[0].includes('um') || equacao_array[0].includes('1') && !equacao_array[0].includes('10') && !equacao_array[0].includes('11') && !equacao_array[0].includes('12') && !equacao_array[0].includes('13') && !equacao_array[0].includes('14') && !equacao_array[0].includes('15') && !equacao_array[0].includes('16') && !equacao_array[0].includes('17') && !equacao_array[0].includes('18') && !equacao_array[0].includes('19')) {
   var first_number = 1;
   //console.log(first_number);
}
else if (equacao_array[0].includes('dois') || equacao_array[0].includes('2') && !equacao_array[0].includes('12') && !equacao_array[0].includes('20') ) {
   var first_number = 2;
   //console.log(first_number);
}
else if (equacao_array[0].includes('três') || equacao_array[0].includes('3') && !equacao_array[0].includes('13') ) {
   var first_number = 3;
   //console.log(first_number);
}
else if (equacao_array[0].includes('quatro') || equacao_array[0].includes('4') && !equacao_array[0].includes('14') ) {
   var first_number = 4;
   //console.log(first_number);
}
else if (equacao_array[0].includes('cinco') || equacao_array[0].includes('5') && !equacao_array[0].includes('15') ) {
   var first_number = 5;
   //console.log(first_number);
}
else if (equacao_array[0].includes('seis') && !equacao_array[0].includes('dezasseis')  || equacao_array[0].includes('6') && !equacao_array[0].includes('16') ) {
   var first_number = 6;
   //console.log(first_number);
}
else if (equacao_array[0].includes('sete') && !equacao_array[0].includes('dezassete')  || equacao_array[0].includes('7') && !equacao_array[0].includes('17') ) {
   var first_number = 7;
   //console.log(first_number);
}
else if (equacao_array[0].includes('oito') && !equacao_array[0].includes('dezoito')  || equacao_array[0].includes('8') && !equacao_array[0].includes('18') ) {
   var first_number = 8;
   //console.log(first_number);
}
else if (equacao_array[0].includes('nove') && !equacao_array[0].includes('dezanove')  || equacao_array[0].includes('9') && !equacao_array[0].includes('19') ) {
   var first_number = 9;
   //console.log(first_number);
}
else if (equacao_array[0].includes('dez') && !equacao_array[0].includes('dezasseis') && !equacao_array[0].includes('dezassete') && !equacao_array[0].includes('dezoito') && !equacao_array[0].includes('dezanove') || equacao_array[0].includes('10')) {
   var first_number = 10;
   //console.log(first_number);
}
else if (equacao_array[0].includes('onze') || equacao_array[0].includes('11')) {
   var first_number = 11;
   //console.log(first_number);
}
else if (equacao_array[0].includes('doze') || equacao_array[0].includes('12')) {
   var first_number = 12;
   //console.log(first_number);
}
else if (equacao_array[0].includes('treze') || equacao_array[0].includes('13')) {
   var first_number = 13;
   //console.log(first_number);
}
else if (equacao_array[0].includes('catorze') || equacao_array[0].includes('14')) {
   var first_number = 14;
   //console.log(first_number);
}
else if (equacao_array[0].includes('quinze') || equacao_array[0].includes('15')) {
   var first_number = 15;
   //console.log(first_number);
}
else if (equacao_array[0].includes('dezasseis') || equacao_array[0].includes('16')) {
   var first_number = 16;
   //console.log(first_number);
}
else if (equacao_array[0].includes('dezassete') || equacao_array[0].includes('17')) {
   var first_number = 17;
   //console.log(first_number);
}
else if (equacao_array[0].includes('dezoito') || equacao_array[0].includes('18')) {
   var first_number = 18;
   //console.log(first_number);
}
else if (equacao_array[0].includes('dezanove') || equacao_array[0].includes('19')) {
   var first_number = 19;
   //console.log(first_number);
}
else if (equacao_array[0].includes('vinte') || equacao_array[0].includes('20')) {
   var first_number = 20;
   //console.log(first_number);
}



// verificar segundo numero
if (equacao_array[1].includes('um') || equacao_array[1].includes('1') && !equacao_array[1].includes('10') && !equacao_array[1].includes('11') && !equacao_array[1].includes('12') && !equacao_array[1].includes('13') && !equacao_array[1].includes('14') && !equacao_array[1].includes('15') && !equacao_array[1].includes('16') && !equacao_array[1].includes('17') && !equacao_array[1].includes('18') && !equacao_array[1].includes('19')) {
   var second_number = 1;
   //console.log(first_number);
}
else if (equacao_array[1].includes('dois') || equacao_array[1].includes('2') && !equacao_array[1].includes('12') && !equacao_array[1].includes('20') ) {
   var second_number = 2;
   //console.log(first_number);
}
else if (equacao_array[1].includes('três') || equacao_array[1].includes('3') && !equacao_array[1].includes('13') ) {
   var second_number = 3;
   //console.log(first_number);
}
else if (equacao_array[1].includes('quatro') || equacao_array[1].includes('4') && !equacao_array[1].includes('14') ) {
   var second_number = 4;
   //console.log(first_number);
}
else if (equacao_array[1].includes('cinco') || equacao_array[1].includes('5') && !equacao_array[1].includes('15') ) {
   var second_number = 5;
   //console.log(first_number);
}
else if (equacao_array[1].includes('seis') && !equacao_array[1].includes('dezasseis')  || equacao_array[1].includes('6') && !equacao_array[1].includes('16') ) {
   var second_number = 6;
   //console.log(first_number);
}
else if (equacao_array[1].includes('sete') && !equacao_array[1].includes('dezassete')  || equacao_array[1].includes('7') && !equacao_array[1].includes('17') ) {
   var second_number = 7;
   //console.log(first_number);
}
else if (equacao_array[1].includes('oito') && !equacao_array[1].includes('dezoito')  || equacao_array[1].includes('8') && !equacao_array[1].includes('18') ) {
   var second_number = 8;
   //console.log(first_number);
}
else if (equacao_array[1].includes('nove') && !equacao_array[1].includes('dezanove')  || equacao_array[1].includes('9') && !equacao_array[1].includes('19') ) {
   var second_number = 9;
   //console.log(first_number);
}
else if (equacao_array[1].includes('dez') && !equacao_array[1].includes('dezasseis') && !equacao_array[1].includes('dezassete') && !equacao_array[1].includes('dezoito') && !equacao_array[1].includes('dezanove') || equacao_array[0].includes('10')) {
   var second_number = 10;
   //console.log(first_number);
}
else if (equacao_array[1].includes('onze') || equacao_array[1].includes('11')) {
   var second_number = 11;
   //console.log(first_number);
}
else if (equacao_array[1].includes('doze') || equacao_array[1].includes('12')) {
   var second_number = 12;
   //console.log(first_number);
}
else if (equacao_array[1].includes('treze') || equacao_array[1].includes('13')) {
   var second_number = 13;
   //console.log(first_number);
}
else if (equacao_array[1].includes('catorze') || equacao_array[1].includes('14')) {
   var second_number = 14;
   //console.log(first_number);
}
else if (equacao_array[1].includes('quinze') || equacao_array[1].includes('15')) {
   var second_number = 15;
   //console.log(first_number);
}
else if (equacao_array[1].includes('dezasseis') || equacao_array[1].includes('16')) {
   var second_number = 16;
   //console.log(first_number);
}
else if (equacao_array[1].includes('dezassete') || equacao_array[1].includes('17')) {
   var second_number = 17;
   //console.log(first_number);
}
else if (equacao_array[1].includes('dezoito') || equacao_array[1].includes('18')) {
   var second_number = 18;
   //console.log(first_number);
}
else if (equacao_array[1].includes('dezanove') || equacao_array[1].includes('19')) {
   var second_number = 19;
   //console.log(first_number);
}
else if (equacao_array[1].includes('vinte') || equacao_array[1].includes('20')) {
   var second_number = 20;
   //console.log(first_number);
}

}


else if ( document.getElementsByClassName('forgetmenot')[0].children[0].innerText.trim() == 'Remember Me') {

// verificar primeiro numero
if (equacao_array[0].includes('one') || equacao_array[0].includes('1') && !equacao_array[0].includes('10') && !equacao_array[0].includes('11') && !equacao_array[0].includes('12') && !equacao_array[0].includes('13') && !equacao_array[0].includes('14') && !equacao_array[0].includes('15') && !equacao_array[0].includes('16') && !equacao_array[0].includes('17') && !equacao_array[0].includes('18') && !equacao_array[0].includes('19')) {
   var first_number = 1;
   //console.log(first_number);
}
else if (equacao_array[0].includes('two') || equacao_array[0].includes('2') && !equacao_array[0].includes('12') && !equacao_array[0].includes('20') ) {
   var first_number = 2;
   //console.log(first_number);
}
else if (equacao_array[0].includes('three') || equacao_array[0].includes('3') && !equacao_array[0].includes('13') ) {
   var first_number = 3;
   //console.log(first_number);
}
else if (equacao_array[0].includes('four') && !equacao_array[0].includes('fourteen')  || equacao_array[0].includes('4') && !equacao_array[0].includes('14') ) {
   var first_number = 4;
   //console.log(first_number);
}
else if (equacao_array[0].includes('five') && !equacao_array[0].includes('fifthteen')  || equacao_array[0].includes('5') && !equacao_array[0].includes('15') ) {
   var first_number = 5;
   //console.log(first_number);
}
else if (equacao_array[0].includes('six') && !equacao_array[0].includes('sixteen')  || equacao_array[0].includes('6') && !equacao_array[0].includes('16') ) {
   var first_number = 6;
   //console.log(first_number);
}
else if (equacao_array[0].includes('seven') && !equacao_array[0].includes('seventeen')  || equacao_array[0].includes('7') && !equacao_array[0].includes('17') ) {
   var first_number = 7;
   //console.log(first_number);
}
else if (equacao_array[0].includes('eight') && !equacao_array[0].includes('eighteen')  || equacao_array[0].includes('8') && !equacao_array[0].includes('18') ) {
   var first_number = 8;
   //console.log(first_number);
}
else if (equacao_array[0].includes('nine') && !equacao_array[0].includes('nineteen')  || equacao_array[0].includes('9') && !equacao_array[0].includes('19') ) {
   var first_number = 9;
   //console.log(first_number);
}
else if (equacao_array[0].includes('ten') || equacao_array[0].includes('10')) {
   var first_number = 10;
   //console.log(first_number);
}
else if (equacao_array[0].includes('eleven') || equacao_array[0].includes('11')) {
   var first_number = 11;
   //console.log(first_number);
}
else if (equacao_array[0].includes('twelve') || equacao_array[0].includes('12')) {
   var first_number = 12;
   //console.log(first_number);
}
else if (equacao_array[0].includes('thirteen') || equacao_array[0].includes('13')) {
   var first_number = 13;
   //console.log(first_number);
}
else if (equacao_array[0].includes('fourteen') || equacao_array[0].includes('14')) {
   var first_number = 14;
   //console.log(first_number);
}
else if (equacao_array[0].includes('fifteen') || equacao_array[0].includes('15')) {
   var first_number = 15;
   //console.log(first_number);
}
else if (equacao_array[0].includes('sixteen') || equacao_array[0].includes('16')) {
   var first_number = 16;
   //console.log(first_number);
}
else if (equacao_array[0].includes('seventeen') || equacao_array[0].includes('17')) {
   var first_number = 17;
   //console.log(first_number);
}
else if (equacao_array[0].includes('eighteen') || equacao_array[0].includes('18')) {
   var first_number = 18;
   //console.log(first_number);
}
else if (equacao_array[0].includes('nineteen') || equacao_array[0].includes('19')) {
   var first_number = 19;
   //console.log(first_number);
}
else if (equacao_array[0].includes('twenty') || equacao_array[0].includes('20')) {
   var first_number = 20;
   //console.log(first_number);
}



// verificar segundo numero
if (equacao_array[1].includes('one') || equacao_array[1].includes('1') && !equacao_array[1].includes('10') && !equacao_array[1].includes('11') && !equacao_array[1].includes('12') && !equacao_array[1].includes('13') && !equacao_array[1].includes('14') && !equacao_array[1].includes('15') && !equacao_array[1].includes('16') && !equacao_array[1].includes('17') && !equacao_array[1].includes('18') && !equacao_array[1].includes('19')) {
   var second_number = 1;
   //console.log(second_number);
}
else if (equacao_array[1].includes('two') || equacao_array[1].includes('2') && !equacao_array[1].includes('12') && !equacao_array[1].includes('20')  ) {
   var second_number = 2;
   //console.log(second_number);
}
else if (equacao_array[1].includes('three') || equacao_array[1].includes('3') && !equacao_array[1].includes('13') ) {
   var second_number = 3;
   //console.log(second_number);
}
else if (equacao_array[1].includes('four') && !equacao_array[1].includes('fourteen')  || equacao_array[1].includes('4')  && !equacao_array[1].includes('14') ) {
   var second_number = 4;
  //console.log(second_number);
}
else if (equacao_array[1].includes('five') && !equacao_array[1].includes('fifthteen')  || equacao_array[1].includes('5')  && !equacao_array[1].includes('15') ) {
   var second_number = 5;
   //console.log(second_number);
}
else if (equacao_array[1].includes('six') && !equacao_array[1].includes('sixteen')  || equacao_array[1].includes('6')  && !equacao_array[1].includes('16') ) {
   var second_number = 6;
   //console.log(second_number);
}
else if (equacao_array[1].includes('seven') && !equacao_array[1].includes('seventeen')  || equacao_array[1].includes('7')  && !equacao_array[1].includes('17') ) {
   var second_number = 7;
   //console.log(second_number);
}
else if (equacao_array[1].includes('eight') && !equacao_array[1].includes('eighteen')  || equacao_array[1].includes('8') && !equacao_array[1].includes('18') ) {
   var second_number = 8;
   //console.log(second_number);
}
else if (equacao_array[1].includes('nine') && !equacao_array[1].includes('nineteen') || equacao_array[1].includes('9') && !equacao_array[1].includes('19') ) {
   var second_number = 9;
   //console.log(second_number);
}
else if (equacao_array[1].includes('ten') || equacao_array[1].includes('10')) {
   var second_number = 10;
   //console.log(second_number);
}
else if (equacao_array[1].includes('eleven') || equacao_array[1].includes('11')) {
   var second_number = 11;
   //console.log(second_number);
}
else if (equacao_array[1].includes('twelve') || equacao_array[1].includes('12')) {
   var second_number = 12;
   //console.log(second_number);
}
else if (equacao_array[1].includes('thirteen') || equacao_array[1].includes('13')) {
   var second_number = 13;
  //console.log(second_number);
}
else if (equacao_array[1].includes('fourteen') || equacao_array[1].includes('14')) {
   var second_number = 14;
   //console.log(second_number);
}
else if (equacao_array[1].includes('fifteen') || equacao_array[1].includes('15')) {
   var second_number = 15;
   //console.log(second_number);
}
else if (equacao_array[1].includes('sixteen') || equacao_array[1].includes('16')) {
   var second_number = 16;
   //console.log(second_number);
}
else if (equacao_array[1].includes('seventeen') || equacao_array[1].includes('17')) {
   var second_number = 17;
   //console.log(second_number);
}
else if (equacao_array[1].includes('eighteen') || equacao_array[1].includes('18')) {
   var second_number = 18;
   //console.log(second_number);
}
else if (equacao_array[1].includes('nineteen') || equacao_array[1].includes('19')) {
   var second_number = 19;
   //console.log(second_number);
}
else if (equacao_array[1].includes('twenty') || equacao_array[1].includes('20')) {
   var second_number = 20;
   //console.log(second_number);
}

}


// Fazer a conta com base no operador
if (operator == '*') {
var resultado = first_number * second_number;
//console.log = ('Resultado ' + resultado);
}
if (operator == '-') {
var resultado = first_number - second_number;
//console.log = ('Resultado ' + resultado);
}
if (operator == '+') {
var resultado = first_number + second_number;
//console.log = ('Resultado ' + resultado);
}

// Introduzir o Resultado
document.getElementById('aiowps-captcha-answer').value = resultado;
}

document.getElementById('user_login').value = 'Antonio';

document.getElementById('user_pass').value = 'PalavraChave';

}
})();