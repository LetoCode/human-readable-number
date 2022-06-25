module.exports = function toReadable (number) {
   if (number >= 1000) {
      return 'not define in this function';
   }
  
    let prefix = '';
    if (number != Math.abs(number)){
      prefix = 'minus';
    }
  
    if (number > 0 && number < 100 && number % 10 == 0 ){
      text = getTextForTens(number);
      result = `${prefix} ${text}`;
      return result.trim();
      
    }else if (number < 20) {
      text = getTextFor_0_to_19(number);
      result = `${prefix} ${text}`;
      return result.trim();
      
    }else{
      text = getTextForOthers(number);
      result = `${prefix} ${text}`;
      return result.trim();
    }
}



function getTextForTens(number){
   let textNumbersObject = getObjectForTens(); 
   return textNumbersObject[number.toString()];
 }
 
 function getTextFor_0_to_19(number){
   let textNumbersObject = getObjectForUnicNumber(); 
   return textNumbersObject[number.toString()];
  }
 
 function getTextForOthers(number){
   let length = Math.abs(number).toString().length;
   let numberInArrayReversed = number.toString().split('').reverse();
   
   let textNumbersObjectUnic = getObjectForUnicNumber();
   let textNumbersObjectTens = getObjectForTens();
   let ones = '';
   let tens = '';
   let hundreds = '';
 
   if (number === 40) {
      tens = textNumbersObjectTens['40'];
      tens = tens + ' ';
      
    }else if (numberInArrayReversed[1] === '1') {
      let symbol = numberInArrayReversed[1] + numberInArrayReversed[0];
      tens = textNumbersObjectUnic[symbol];
      tens = tens + ' ';
    } else {
      
      for(let i = 0; i <= length-1; i++){
       
        value = numberInArrayReversed[i];
       
       if (i === 0){
         ones = (value === '0'? '' : textNumbersObjectUnic[value]);
       } else if (i === 1){
          tens = (value === '0'? '' : textNumbersObjectTens[value + '0']);
          tens = tens && tens + ' ';
       } 
       
      }
    }
 
 if (length === 3){
   console.log(length);
   value = numberInArrayReversed[2];
   numberAsText = textNumbersObjectUnic[value];
   let hundredsPostfix = getHundredsPostfix(2);
   hundreds = `${numberAsText} ${hundredsPostfix}`;
   hundreds = hundreds + ' ';
 }
  
   return `${hundreds}${tens}${ones}`;
 }
 
 function getObjectForTens(){
 
   let textNumbersArray = {
       '10': 'ten',
       '20': 'twenty',
       '30': 'thirty',
       '40': 'forty',
       '50': 'fifty',
       '60': 'sixty',
       '70': 'seventy',
       '80': 'eighty',
       '90': 'ninety',
     };
   
   return textNumbersArray;
 }
 
 function getObjectForUnicNumber(){
 
   let textNumbersArray = {
       '0': 'zero',   
       '1': 'one',
       '2': 'two',
       '3': 'three',
       '4': 'four',
       '5': 'five',
       '6': 'six',
       '7': 'seven',
       '8': 'eight',
       '9': 'nine',
       '10': 'ten',
       '11': 'eleven',
       '12': 'twelve',
       '13': 'thirteen',
       '14': 'fourteen',
       '15': 'fifteen',
       '16': 'sixteen',
       '17': 'seventeen',
       '18': 'eighteen',
       '19': 'nineteen',
      
     };
   
   return textNumbersArray;
 }

 
 function getHundredsPostfix(i){
   
   let hundredsPostfix = '';
   
   if (i === 2){
     hundredsPostfix = 'hundred';
   }
 
   return hundredsPostfix;
 }
 
 

 