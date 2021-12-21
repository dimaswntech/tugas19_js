function tugas(){
    var x ="Semangat..."
    console.log(x.repeat(5));
    let star = '*****';
//let loop = 1;
var z = 1;
for(let i=1; i<=9; i++){
    if(i == 1 || i == 9){
        //temp = 1;
        console.log(star.repeat(z));
    } else if(i > 1 && i < 5){
        z = z + 4;
        console.log(star.repeat(z));
    } else if(i == 5){
        z = z + 6;
        console.log(star.repeat(z));
        z = z - 6;
    } else if(i > 5 && i < 9){
        console.log(star.repeat(z));
        z = z - 4;
    }
}
}
tugas();