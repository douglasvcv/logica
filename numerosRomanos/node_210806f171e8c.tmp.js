function zero(number) {
  if (number.length > 1) {
    let sub = number.length - 1;
    let expoente = 10 ** sub;
    console.log(expoente);
    return expoente;
  } else {
    let expoente = 1;
    console.log(expoente);
    return expoente;
  }
}

function transformRomanNumber(number) {
  let romanNumber = "";
  switch (number) {
    case 1:
      romanNumber += "I";
      break;
    case 4:
      romanNumber += "IV";
      break;
    case 5:
      romanNumber += "V";
      break;
    case 9:
      romanNumber += "IX";
      break;
    case 10:
      romanNumber += "X";
      break;
    case 40:
      romanNumber += "XL";
      break;
    case 50:
      romanNumber += "L";
      break;
    case 90:
      romanNumber += "XC";
      break;
    case 100:
      romanNumber += "C";
      break;
    case 400:
      romanNumber += "CD";
      break;
    case 500:
      romanNumber += "D";
      break;
    case 900:
      romanNumber += "CM";
      break;
    case 1000:
      romanNumber += "M";
      break;
  }
  console.log(romanNumber);
  return romanNumber;
}

function NumeroRomano(normalNumber) {
  const array = normalNumber.split("");
  let finalNumber = "";
  let length = array.length;
  for (let i = 0; i < array.length; i++) {
    let initialNum = Number(array[i]);
    let pot = zero(array);
    let initialNumber = pot * initialNum[i];
    let numberIf = initialNumber
    if (!transformRomanNumber(initialNumber)) {
      while(initialNumber != 0){
         numberIf -= pot
         if(transformRomanNumber(numberIf)){
          transformRomanNumber(numberIf)
          initialNumber - numberIf
         }
      }
    }
    pot / 10;
    array.shift();
  }

  console.log(finalNumber);
}

NumeroRomano("3");
/*
I = 1
V=5
X=10
L=50
C=100
D=500
M=1000
*/
