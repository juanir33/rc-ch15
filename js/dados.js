function dados(){
    let d1 = Math.random()*5 + 1;
    let d2 = Math.random()*5 + 1;

    
    
    document.getElementById('resultado').innerHTML = 'Dado N1 = ' + d1.toFixed();
    document.getElementById('resultado2').innerHTML = 'Dado N2 = ' + d2.toFixed();


}
