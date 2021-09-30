const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("enter the number  ",(number)=>{
    var data;
    data=Number(number);
    console.log(data);
    isPrime (data)
    
rl.close()
    })
    function isPrime (data)
    {
        if (data < 2) return false;
    
        /**
         * An integer is prime if it is not divisible by any prime less than or equal to its square root
         **/
    
        var q = Math.floor(Math.sqrt(data));
    
        for (var i = 2; i <= q; i++)
        {
            if (data % i == 0)
            {
                console.log("not prime");
                return false;
            }
        }
    console.log("prime");
        return true;
    } 
