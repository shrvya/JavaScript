var monthlist=["March","April","May","June"]
var month=process.argv[2]
var date=process.argv[3]
var index=monthlist.indexOf(month)

if((index==0 && Number(date)>19)||(index==3 && date<21)||(index==1)||index==2)
{
   var result="true";
}
else{
    result="false"
}
console.log(result);
