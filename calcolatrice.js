let globale = ""
function numero0(){
    document.getElementById("risultato").textContent += "0"
    globale += "0"
}
function numero1(){
    document.getElementById("risultato").textContent += "1"
    globale += "1"
}
function numero2(){
    document.getElementById("risultato").textContent += "2"
    globale += "2"
}
function numero3(){
    document.getElementById("risultato").textContent += "3"
    globale += "3"
}
function numero4(){
    document.getElementById("risultato").textContent += "4"
    globale += "4"
}
function numero5(){
    document.getElementById("risultato").textContent += "5"
    globale += "5"
}
function numero6(){
    document.getElementById("risultato").textContent += "6"
    globale += "6"
}
function numero7(){
    document.getElementById("risultato").textContent += "7"
    globale += "7"
}
function numero8(){
    document.getElementById("risultato").textContent += "8"
    globale += "8"    
}
function numero9(){
    document.getElementById("risultato").textContent += "9"
    globale += "9"
}
function AC(){
    document.getElementById("risultato").textContent = ""
    globale = ""
}
function uguale(){
    document.getElementById("risultato").textContent = eval(globale)
    globale = document.getElementById("risultato").textContent
}
function somma(){
    document.getElementById("risultato").textContent += "+"
    globale += "+"
}
function sottrazione(){
    document.getElementById("risultato").textContent += "-"
    globale += "-"
}
function moltiplicazione(){
    document.getElementById("risultato").textContent += "*"
    globale += "*"
}
function divisione(){
    document.getElementById("risultato").textContent += "/"
    globale += "/"
}
function backspace(){
    let leng = globale.length 
    let b = globale.split("")
    let c = b.pop(leng - 1)
    globale = b.join('')
    document.getElementById("risultato").textContent = globale
}
function percentuale(){
    let temp = parseInt(globale)
    document.getElementById("risultato").textContent = Math.abs(temp/100)
}
function parentesi(){
}
function virgola(){
    document.getElementById("risultato").textContent += "."
    globale += "."
}
function pigreco(){
    document.getElementById("risultato").textContent += "3.14"
    globale += "3.14"
}
function potenza(){
    document.getElementById("risultato").textContent += "^"
    globale += "**"
}
function sqrt(){
    let temp = parseInt(globale)
    globale = Math.sqrt(temp)
    document.getElementById("risultato").textContent = globale
}
function fattoriale(){
    for(let i = globale -1; i>= 1; i--){
        globale =  globale * i
    }
    globale = String(globale)
    document.getElementById("risultato").textContent = globale
    
}