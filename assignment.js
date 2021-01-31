//https://github.com/milydatta/Assignment-3
// problem-1 (solve)
//kilometerToMeter

function kilometerToMeter(kilometer){
    if (kilometer < 0){
        return "distance can't be negative";
    }else{
        meter = kilometer * 1000;
        return meter;
    }
}
var kilometer = kilometerToMeter(5);
console.log(kilometer);


// problem-2 (solve)
// budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
   var eachWatch = 50;
   var eachMobile = 100;
   var eachLaptop = 500;
  
 if(watch < 0 || mobile < 0 || laptop < 0){
   var output = "unexpected input";
 }else{
       var costWatch = eachWatch * watch;
       var costMobile = eachMobile * mobile;
       var costLaptop = eachLaptop * laptop;

       var output = costWatch + costMobile + costLaptop;
   }
   return output;
}

// problem-3 (solve)
// hotelCost

function hotelCost(dayHold) {
    var Cost = 0;
    if (dayHold <=10){
      hotelCost = dayHold * 100;
    } else if (dayHold <=20) {
        var firstDayHold = 10 * 100;
        var remaining = dayHold - 10;
        var secondDayHold = remaining * 80;
        hotelCost = firstDayHold + secondDayHold;
    }else{
       var firstDayHold = 10*100;
       var secondDayHold = 10*80;
       var remaining = dayHold - 20;
       var thirdDayHold = remaining * 50;
       var hotelCost = firstDayHold + secondDayHold + thirdDayHold;
    }
    return hotelCost;
}
var count = hotelCost(23);
console.log(count);


// problem-4 (solve)
// megaFriend

var friendsName = ['mina', 'rajju', 'mitthu'];
var long = 0;
var max;

for (var i = 0; i < friendsName.length; i++){
    if (friendsName[i].length > long) {
        var long = friendsName[i].length;
        max = friendsName[i];
    }
}

console.log(max);
