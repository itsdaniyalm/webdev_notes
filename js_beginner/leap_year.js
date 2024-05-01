function isLeap(year) {
     if (year%4 === 0) {
         if (year%100 === 0) {
             if (year%400 === 0) {
                 var msg = "Leap year.";
             } else {
                 msg = "Not leap year.";
             }
         } else {
             msg = "Leap year.";
         }
     } else {
         msg = "Not leap year.";
     }
return msg;
}

console.log(isLeap(2020));