function defaultParam(n1,n2=1)
{
    return n1 * n2
}

console.log(defaultParam(10));
console.log(defaultParam(10,20));