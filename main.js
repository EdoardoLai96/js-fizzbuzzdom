
let myContainer = document.getElementById('mioContenitore');


for(let i=1; i <= 100; i++){

    
    if( i%3 == 0) {
        myContainer.innerHTML +=  "<div class='box-multiplo-3'>" + i + "</div>";
        
    } else if (i%5 == 0){
        myContainer.innerHTML +=  "<div class='box-multiplo-5'>" + i + "</div>";
        
    } else if (i%5 ==0 && i%3 == 0){
        myContainer.innerHTML +=  "<div class='box-multiplo-3-5'>" + i + "</div>";
    }


    

}