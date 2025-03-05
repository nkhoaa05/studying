function giaoThua(N) {
    if (N == 0)
        return 1;
    return N * giaoThua(N - 1);
}


console.log(giaoThua(3));
// TEST