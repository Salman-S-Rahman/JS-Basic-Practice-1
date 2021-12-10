
function leapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0)) {
        console.log(year + ' year is leap year')
    }
    else {
        console.log(year + ' year is not leap year')
    }
}

leapYear(2000)