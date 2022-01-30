let gaveta ="meia" 
console.log (gaveta)

function bbb(a,b,c){
    console.log(`Os participantes do BB são ${a}, ${b} e ${c}`)

}
bbb("Arthur","Linn", "Nathy")

function number (batata){
    return batata *3 
}
console.log (number(5))

let gaveta = ['meia', 'calça']

if (gaveta === 'meia' && gaveta === 'calça'){
    console.log ("meiaaa")
}else {
    console.log ('a')
}

let count = 0
while (count <= 10){
 console.log(count)
 count = count+1
}

for (let count =0; count <=25; count ++){
     console.log (count)
}

let hermione = ["pente", "creme", "radio", "varinha", "base"] 
console.log (hermione[4])

let pallet = ["azul", "verde", "amarelo","branco"]

let bag = ["faca", "corda", "espelho"]
bag.push([1,2,3])
console.log(bag)

let items = ["faca", "poção", "mapa", "cajado"]

items.splice(2, 0, "machado") 
items.splice(1,1)