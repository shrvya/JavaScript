var a=5,b=6,c=8;

first=a + b * c 
 sec=c + a / b
 third=a % b + c 
 fourth=a * b + c
 var max=first
 
 if(max>sec && max>third && max>fourth)
 {
    console.log(max);
 }
 if (sec>max && sec>third && sec>fourth) {
    console.log(sec);
 } 
 if(third>max && third>sec && third>fourth)
 {
    console.log(third);
 }
 if(fourth>max && fourth>sec && fourth>third) {
     console.log(fourth);
 }
 