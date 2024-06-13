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
  }


  
  function bla(){
   let ze = zero([1,2,3])
    transformRomanNumber(ze)
  }
  bla()


const d = [2,3,1]
console.log(d.length-1)
  
// let bla = "123";
// let bla2 = bla.split("");
// let bla3 = Number(bla)

// let douglas = "douglas"
// let toma = douglas += "22"
// let tome = "32"
// let tome2 = Number(tome)
// let tome15 = tome[1]
// let tome3 = Number(tome15)
// console.log(typeof(tome3));