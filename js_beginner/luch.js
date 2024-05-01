var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function whosPaying(names) {
    var noOfPeeps = names.length;
    var poi = Math.floor(Math.random()*noOfPeeps);
    return(names[poi]+" is going to buy lunch today!");
}
whosPaying(names);