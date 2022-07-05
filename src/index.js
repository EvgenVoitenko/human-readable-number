module.exports = function toReadable (number) {
const numberString = number.toString();             //делаем из числа строку//
const numberMatrix = numberString.split('');   //раскладываем поэлементно строку в матрицу//
const numberItems = numberMatrix.length;        //считаем количество цифр в числе//
let result = '_';
let numberUnits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let tens = ['eleven', 'twelve', 'thirty', 'fourteen', 'fifteen', 'sixteen', 'eighteen', 'nineteen'];


if (numberItems == 1) {                        //если число однозначное//
switch (numberString[0]) {
case('1'):
result = numberUnits[0];
break;
case('2'):
result = numberUnits[1];
break;
case('3'):
result = numberUnits[2];
break;
case('4'):
result = numberUnits[3];
break;
case('5'):
result = numberUnits[4];
break;
case('6'):
result = numberUnits[5];
break;
case('7'):
result = numberUnits[6];
break;
case('8'):
result = numberUnits[7];
break;
case('9'):
result = numberUnits[8];
break;
}
return result;
}

                                                    //если число от 10 до 19//

else if ((number >= 10) || (number < 20)) {
    switch (numberString) {
        case('10'):
        result = 'ten';
        break;
        case('11'):
        result = tens[0];
        break;
        case('12'):
        result = tens[1];
        break;
        case('13'):
        result = tens[2];
        break;
        case('14'):
        result = tens[3];
        break;
        case('15'):
        result = tens[4];
        break;
        case('16'):
        result = tens[5];
        break;
        case('17'):
        result = tens[6];
        break;
        case('18'):
        result = tens[7];
        break;
        case('19'):
        result = tens[8];
        break;
    }
    return result;
}
}