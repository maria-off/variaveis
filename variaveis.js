let a = 40;
let b = 10;
let c = 20;
let total = 0;
let totalde = 0;
let x = 5;
total = (a + b + c);
totalde =  (a + b + c) /x
console.log("O valor do total é:", total);
console.log("O valor do total é:", totalde);
console.log( outraconta());
console.log(media());
console.log(carros());
console.log(triangulo());
console.log(frutas())

// inicio da function
function outraconta() {
    var d = 10;
    var e = 20;
    var f = 30;
    var tot = 0;
    var totde = 0;
    var xx = 100;
    tot = ( d + e + f);
    totde = ( d + e + f )/ xx
    //console.log("O valor de tot na function é:", tot);
    //console.log("O valor de totde na function é: ",totde);
    return tot;
    return totde;

} 




function media(){
    let nfinal = 0;
    n1 = 30;
    n2 = 90;
    n3 = 100;
    nfinal = (n1 + n2 + n3);
    nfinal = (n1 + n2 + n3)/ 3;
    //console.log("A media do aluno é :", nfinal.toFixed(1));
    return nfinal.toFixed(1);
}

function carros () {
   carros1 = "fusca";
   km = 100;
   p = 12,79;

   carros2 = "celta";
   km2 = 360;
   p2 = 45,90;
   console.log("o total do fusca é:",km*p);
   console.log("o total  do celta é:",km2*p2);
}

function triangulo(){
    b = 5;
    a = 12;
    t =b*a/2;
    console.log("O valor da área é:", t);
}

function frutas(){
    let frutas=[ "Maça", "Banana","Laranja"];
    console.log(frutas.length);
    console.log(frutas);
    frutas.push('Manga');
    console.log(frutas);
    console.log(frutas.length);
    frutas.pop();
    frutas.pop();
    console.log(frutas);
    frutas.pop();
    frutas.pop();
    console.log(frutas);
    frutas.push("Uva");
    frutas.push("Amora");
    frutas.push("Mexirica" ,"Abacate", "Abacaxi")
    console.log(frutas);
    console.log(" A frutas na posição 1 é:", frutas[1]);
    console.log(frutas.length);
    console.log("O total de registros é de",frutas.length + 1, "Frutas");
    frutas.unshift("Cereija");
    console.log(frutas);
}
