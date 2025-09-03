var x = 0
var y = 100

while (x <= 10){
    if (x === 5){
        console.log(x)
        x++
        continue
    }
    document.writeln(x)
    x++
}
document.writeln("<br>")
while (y >= 10 ){
    if (y === 80){
        console.log(y)
        y--
        break
    }
    document.writeln(y)
    y--
}