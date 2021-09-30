let x=0
while(x<process.argv[2]){
    console.log(2**x)
    x=x+1
}
console.log("\nharmonic number")
let sum=1
x=2
while(x<=process.argv[2]){
    sum=sum+(1/x)
    x=x+1
}
console.log(sum)