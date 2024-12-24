var numa = 0
var numb = 1
var fibonacci = numa + ", " + numb

for (var i = 2; i < 10; i++) {
    var numc = numa + numb
    fibonacci += ", " + numc
    numa = numb
    numb = numc
}
console.log("Os primeiros 10 números da sequência Fibonacci são: " + fibonacci)
