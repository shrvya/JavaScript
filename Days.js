const numbers=[1,2,3,4,5,6,7]
numbers.forEach(digits);
function digits(number) {
    switch(number){
        case 1:console.log("Sunday");
        break;
        case 2:console.log("Monday");
        break;
        case 3:console.log("Tuesday");
        break;
        case 4:console.log("Wednsday");
        break;
        case 5:console.log("Thursday");
        break;
        case 6:console.log("friday");
        break;
        case 7:console.log("Saturday");
        break;
    default:console.log("END");
    }

}


