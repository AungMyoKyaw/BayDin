"use strict";

function nayNum(str) {
  // to filter vowel
  var vowel = /[က-အ](?!်|္)/g; //thanks to ko camhill(mysteryzillion.org) for this regex.
  function setRex(i) {
    var s1 = /[အ]/;
    var s2 = /[က-င]/;
    var s3 = /[စ-ည]/;
    var s4 = /[ယ-ဝ]/;
    var s5 = /[ပ-မ]/;
    var s6 = /[သဟ]/;
    var s7 = /[တ-န]/;
    switch (i) {
      case 1:
        return s1;
      case 2:
        return s2;
      case 3:
        return s3;
      case 4:
        return s4;
      case 5:
        return s5;
      case 6:
        return s6;
      case 7:
        return s7;
    }
  }
  var str = str.match(vowel);
  var ans = "";
  str.forEach(function (a) {
    var test = false;
    var i = 1;
    while (test === false) {
      var patt = setRex(i);
      if (patt.test(a) === true) {
        test = true;
        if (i == 7) {
          ans += 0;
        } else {
          ans += i;
        }
      } else {
        i++;
      }
    }
  });
  return Number(ans);
}
module.exports = nayNum;