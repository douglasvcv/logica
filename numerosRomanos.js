const transformarNumero = (numero) => {
    let arrayNumero = numero.split("")
    
    var Num = 0

    for(let i = 0; i < arrayNumero.length; i++){
        if(arrayNumero[i] == "I"){
            if(arrayNumero[i+1] == "V"){
                Num-=1
            }
            if(arrayNumero[i+1] == "X"){
                Num-=1
            }else{
                Num+=1
            }
        }
        if(arrayNumero[i] == "V"){
            if(arrayNumero[i-1] == "I"){
                Num+=4
            }
           else{
                Num+=5
            }
            }

        if(arrayNumero[i] == "X"){
                if(arrayNumero[i+1] == "L"){
                    Num-=10
                }
                if(arrayNumero[i+1] == "C"){
                    Num-=10
                }else{
                    Num+=10
                }
            }
            if(arrayNumero[i] == "L"){
                if(arrayNumero[i-1] == "X"){
                    Num+=40
                }
               else{
                    Num+=50
                }
            }
            if(arrayNumero[i] == "C"){
                
                if(arrayNumero[i+1] == "M"){
                    Num-=100
                }else{
                    Num+=100
                }
            }
            if(arrayNumero[i] == "M"){
                Num+=1000
            }
        }
        console.log(Num)
        }
        
        
        
        
        transformarNumero("MMCMXLII")
        