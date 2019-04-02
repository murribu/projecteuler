var currentDay = 1;
var sundayCount = 0;
var thirtyDayMonths = [4, 6, 9, 11];
var thirtyOneDayMonths = [1, 3, 5, 7, 8, 10, 12];

for (var year = 1900; year <= 2000; year++) {
  for (var month = 1; month <= 12; month++) {
    for (var day = 1; day <= 31; day++) {
      if (year > 1900 && currentDay === 0 && day === 1) {
        sundayCount++;
      }
      if (
        day < 29 ||
        (thirtyDayMonths.indexOf(month) > -1 && day < 31) ||
        thirtyOneDayMonths.indexOf(month) > -1 ||
        (month === 2 &&
          day === 29 &&
          (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)))
      ) {
        // console.log(month + "-" + day + "-" + year + " - " + currentDay);
        currentDay = (currentDay + 1) % 7;
      }
    }
  }
}

console.log(sundayCount);
