// problem-1 (solve)
//kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var kilometer = kilometerToMeter(5);
console.log(kilometer);


// problem-2 (solve)
// budgetCalculator

function budgetCalculator(clock, mobile, laptop) {
    var total = clock  + mobile  + laptop ;
    return total;
}
var clockAmount = 5;
var clockBudget = 250;
var mobileAmount = 5;
var mobileBudget = 500;
var laptopAmount = 5;
var laptopBudget = 2500;
var myBudget = budgetCalculator(250 , 500 , 2500);
console.log(myBudget);


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

function megaFriend(friendsName){
    var max = friendsName[0];
    for (var i = 0; i < friendsName.length; i++);
         var currentName = friendsName[i];
         if(currentName > max){
             max = currentName;
         }
     return megaFriend;   
}
var max = megaFriend["mina", "raj", "mithu"];
console.log(max);

