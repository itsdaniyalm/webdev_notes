
function generator(n) {
    var list = []
    var y = 0
    if (n===1) {
        list.push(0);
        console.log(list);
    } else if (n===2) {
        list.push(0,1);
        console.log(list);
    } else if (n===3) {
        list.push(0,1,1);
        console.log(list);
    } else {
        list.push(0,1);
        for (var x = 1; x <= n-2; x++){
        y = list[x]+list[x-1];
        console.log("y: "+y);
        list.push(y);
        }
    return(list);
    }
}