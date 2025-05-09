function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function fibonacciArray(n) {
    var arr = [];
    var sum = 0;
    for (var i = 0; i < n; i++) {
        arr.push(fibonacci(i));
    }
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(fibonacciArray(10)); // 55
