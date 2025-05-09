function fibonacci(n:number):number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function fibonacciArray(n:number):number {
    const arr:number[] = [];
    let sum:number = 0;
    for (let i = 0; i < n; i++) {
        arr.push(fibonacci(i));
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(fibonacciArray(10));