var number=process.argv[2]
var length=number.length
var digit
function digits(digit)
{
    for(let i=1;i<=length;i++)
    {
    if(number>1){
        var unit=Math.floor(number%Math.pow(10,length-i));
        console.log(unit);
        number=Math.floor(number/10);
    }
    else
    {
        console.log(number);
    }   
    }   
}
digits(number)

