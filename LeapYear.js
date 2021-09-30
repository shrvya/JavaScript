function leapYear( year) {
if((year%100!=0)&&(year%4==0)||(year%400==0))
console.log("Leap Year");
else
console.log("Not a Leap Year");
    
}
leapYear(2019)
leapYear(2020)
leapYear(2023)