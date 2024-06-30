"use strict";

function numFormat(num) {
  var value = ["တစ်", "နှစ်", "သုံး", "လေး", "ငါး", "ခြောက်", "ခုနှစ်", "ရှစ်", "ကိုး"];
  var format = ["ကုဋေ", "သန်း", "သိန်း", "သောင်း", "ထောင်", "ရာ", "ဆယ်", ""];
  var ans = "";
  var numlength = num.toString().length;
  // console.log(numlength);
  if (numlength > 7) {
    var kuday = num.toString().slice(0, numlength - 7);
    if (kuday.length < 8) {
      ans += formatter(kuday) + format[0] + formatter(num.toString().slice(numlength - 7));
    } else {
      return num;
    }
  } else {
    ans += formatter(num);
  }
  function formatter(num) {
    var ans = "";
    if (num.toString().length) num.toString().split("").forEach(function (element, index, arr) {
      if (Number(element) !== 0) {
        ans += value[element - 1] + format[8 + index - arr.length];
      }
    });
    return ans;
  }
  return ans;
}
module.exports = numFormat;