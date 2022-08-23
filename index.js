

let names= (["Guadalupe", "Ollie", "Aki"], "surprise");

function writeCards(names, event=surprise){
    let array=[];
    for(let i=0; i<names.length; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}

function countDown(n) {
    for (let i=n; i>=0; i--) {
        console.log (i)
    } 
}



 

