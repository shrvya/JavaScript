const array=new Array();
var temp=0;
var ranfun=(min,max)=>
{
 ran=Math.floor(Math.random()*(max-min)+min)
 array.push(ran)
    temp=temp+ran
}

for(let i=0;i<5;i++)
{   var vari= ranfun(1,15)
    
}
console.log(array);
console.log(temp);
console.log(temp/array.length);