var number=process.argv[2]
function reverseDigits(num)
{
    let rev_num = 0;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev_num;
}
function isPalindrome(n)
{
    let rev_n = reverseDigits(n);
    if (rev_n == n)
        console.log("Pallindrome");
    else
    console.log("not Pallindrome");
}

isPalindrome(number)
