module.exports = function toReadable (number) {
const numberString = number.toString();             //делаем из числа строку//
const numberMatrix = numberString.split('');   //раскладываем поэлементно строку в матрицу//
const numberItems = numberMatrix.length;        //считаем количество цифр в числе//
let result = '_';
let numberUnits = ['','one','two','three','four','five','six','seven','eight','nine'];
let dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let tens = ['eleven', 'twelve', 'thirty', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];


if (number < 9) {                        //если число однозначное//
    result = numberUnits[numberString[0]];                     
return result;
}
                                                    //если число от 10 до 19//

else if ((number >= 10) && (number < 20)) {
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
else if ((number >= 20) && (number < 99)) { 
        result = `${dozens[(numberString[0] - 1)]}' '${numberUnits[(numberString[1] - 1)]}`;
        return result;      
}
            // Если трехзначное число заканчивается на ноль
else if ((number >= 100) && (number <= 999) && (numberUnits[(numberString[2])] == 0)) {
    result = `${numberUnits[(numberString[0])]} hundred ${dozens[(numberString[1])]}`;
    return result;

    // Если число трехзначное
}
else if ((number >= 100) && (number <= 999)) {
    result = `${numberUnits[(numberString[0])]} hundred ${dozens[(numberString[1])]} ${numberUnits[(numberString[2])]}`;
    return result;
}

}