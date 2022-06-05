var month = [];

var firstWeeks = [];
var lastWeeks = [];

var avgTempWeekFirst = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeekSecund = [41, 29, 33, 21.2, 19.4, 17, 33.8];

var avgTempWeekThree = [23, 39, 32, 11.2, 29.4, 12, 35.1];
var avgTempWeekFour = [23.9, 27, 43, 25.99, 10.1, 47, 43.8];

firstWeeks = [avgTempWeekFirst, avgTempWeekSecund];
lastWeeks = [avgTempWeekThree, avgTempWeekFour];

month = [firstWeeks, lastWeeks];

console.log(month[0][1][0]); //41

for (var x = 0; x < month.length; x++) {
  //month
  for (y = 0; y < month[x].length; y++) {
    //week
    for (z = 0; z < month[x][y].length; z++) {
      console.log(month[x][y][z]); // all
    }
  }
}
