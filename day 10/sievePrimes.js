function sievePrimes(n) {
    const primes = [];
    if (n < 2) return primes;

    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (isPrime[p]) {
            for (let multiple = p * p; multiple <= n; multiple += p) {
                isPrime[multiple] = false;
            }
        }
    }

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}
console.log(sievePrimes(7)); // [2, 3, 5, 7]
console.log(sievePrimes(2)); // [2]
console.log(sievePrimes(1)); // []
console.log(sievePrimes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(sievePrimes(0)); // []
console.log(sievePrimes(50)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
console.log(sievePrimes(100)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
