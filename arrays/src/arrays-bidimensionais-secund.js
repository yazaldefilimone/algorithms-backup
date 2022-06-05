var avgTempWeek = [];
var avgTempWeekFirst = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeekSecund = [41, 29, 33, 21.2, 19.4, 17, 33.8];

avgTempWeek[0] = avgTempWeekFirst;
avgTempWeek[1] = avgTempWeekSecund;

for (var indexFirst = 0; indexFirst < avgTempWeek.length; indexFirst++) {
  for (var indexSecund = 0; indexSecund < avgTempWeek[indexFirst].length; indexSecund++) {
    console.log(avgTempWeek[indexFirst][indexSecund]);
  }
}
