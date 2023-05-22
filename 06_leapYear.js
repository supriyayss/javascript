console.log(`Design a function expression using if else to check given year is leap year or not.`);
var checkLeapYear = function(leapYear){
    console.log(`Year: ${leapYear}`);
    if (leapYear==undefined || isNaN(leapYear) || typeof leapYear ==='string') {
        console.log(`Is a Invalid Data`);
    } else 
        if (leapYear%4 == 0 && leapYear%100 !== 0 || leapYear%400 == 0) {
            console.log(`Is a Leap year`);
        } else {
            console.log(`not a Leap year`);
        }
        console.log(``);
    }

checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear('Twenty Twenty');
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
