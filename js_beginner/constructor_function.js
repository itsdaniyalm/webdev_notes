function HouseKeeper (name, yearsOfExperience, cleaningRpertoire) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRpertoire = cleaningRpertoire;
    this.clean = function cleanRoom() {
        alert("Cleaning in Progress");
    }
}

var housekeeper1 = new HouseKeeper("Jane", 5, ["bathroom", "closet"]);
var houseKeeper2 = new HouseKeeper("John", 3, ["room"]);
console.log(housekeeper1);
console.log(houseKeeper2);