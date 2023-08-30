let factorial = 1;
for(let i = 5 ; i >= 1 ; i--){
    factorial =factorial * i
} 
console.log(factorial) ;


function factorial2(i){
    if(i === 1 ){
        return 1;
    }
return i * factorial2( i - 1 ) ;
}
console.log(factorial2(5))