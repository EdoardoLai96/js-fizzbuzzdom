
let myContainer = document.getElementById('mioContenitore');


let domanda = parseInt(prompt("Scegli un numero da 1 a 100 e ti dirò se è multiplo di 3, di 5, di entrambi o di nessuno"));


if (domanda%3 == 0 && domanda%5 == 0){

    alert("E' multiplo di 3 e 5, se non ti fidi controlla la tabella");

}else if (domanda%5 == 0) {

    alert("E' multiplo di 5, se non ti fidi controlla la tabella");

}else if (domanda%3 == 0) {

    alert("E' multiplo di 3, se non ti fidi controlla la tabella");

}else {alert("Non è multiplo di nessuno ,se non ti fidi controlla la tabella");}



for(let i=1; i <= 100; i++){

    
    if( i%5 ==0 && i%3 == 0) {
        myContainer.innerHTML +=  "<div class='box-multiplo-3-5'>" + "buzzfizz" + "</div>";
        
    } else if (i%5 == 0){
        myContainer.innerHTML +=  "<div class='box-multiplo-5'>" + "fizz" + "</div>";
        
    } else if (i%3 == 0){
        myContainer.innerHTML +=  "<div class='box-multiplo-3'>" + "buzz" + "</div>";
        
    } else {
        myContainer.innerHTML +=  "<div class='box-normale'>" + i + "</div>";

    }


    

}





