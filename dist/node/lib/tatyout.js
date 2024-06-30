"use strict";

function သက်ရောက်(အသက်, နေ့) {
  var တိုင်စဉ် = [];
  var အကြွင်း = အသက် % 7;
  for (var i = 0; i < 7; i++) {
    var ထည့်ရန် = နေ့ + i;
    if (ထည့်ရန် > 7) {
      တိုင်စဉ်.push(ထည့်ရန် - 7);
    } else {
      တိုင်စဉ်.push(ထည့်ရန်);
    }
  }
  //console.log(တိုင်စဉ်);
  //console.log(အကြွင်း);
  return တိုင်စဉ်[အကြွင်း - 1];
}
module.exports = သက်ရောက်;