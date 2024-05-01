var output =[];
var count = 1;
function fizzbuzz() {
    if (count === 1) {
        output.push(count);
        count++
    } else if (count%3===0 && count%15!==0){
        output.push("Fizz");
        count++
    } else if (count%5===0 && count%15!==0){
        output.push("Buzz");
        count++
    } else if (count%15===0){
        output.push("Fizz Buzz");
        count++
    } else {
        output.push(count++);
    }
    console.log(output);
    console.log(count);
}