function zero(number){
   
  if(number.length>1){
  let sub = number.length - 1
   let expoente = 10**sub
   console.log(expoente)
   return expoente
   }else{
     let expoente = 1
     console.log(expoente)
    return expoente
  }
}

function transformRomanNumber(number){
  let romanNumber = ""
  switch(number){
    case 1:
      romanNumber+="I"
      break
    case 4:
      romanNumber+="IV"
      break
    case 5:
      romanNumber+="V"
      break
    case 9:
      romanNumber+="IX"
      break
    case 10:
      romanNumber+="X"
      break
    case 40:
      romanNumber+="XL"
      break
    case 50:
      romanNumber+="L"
      break
    case 90:
      romanNumber+="XC"
      break
    case 100:
      romanNumber+="C"
      break
    case 400:
      romanNumber+="CD"
      break
    case 500:
      romanNumber+="D"
      break
    case 900:
      romanNumber+="CM"
      break
    case 1000:
      romanNumber+="M"
      break
  
  }
  console.log(romanNumber)
  return romanNumber
}


function NumeroRomano(normalNumber) {
  const array = normalNumber.split("");
  let letter = "";
  let length = array.length;
  for (let i = 0; i <= length; i++) {
    const number = Number(array[i]);
    if (number == 1) {
      let func = zero(array);
      letter += transformRomanNumber(func);
      length-1;
    }
    if (number > 1) {
    
        for (let i = 0; i < number; i++) {
          let func = zero(array);
        letter += transformRomanNumber(func);
        }
      
      length-1;
    }
  }
  console.log(letter);
}

NumeroRomano("3")
/*
I = 1
V=5
X=10
L=50
C=100
D=500
M=1000
*/

