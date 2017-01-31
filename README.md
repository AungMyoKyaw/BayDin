# BayDinJS
```
npm install --save baydin
```

## Function List
- maharbote
- nayNum
- numerology
- numFormat
- tatyout

## maharbote
ပုတိ ၊ ဘင်္ဂ ၊ မရဏ ၊ အထွန်း ၊ သိုက် ၊ ရာဇာ ၊ အဓိပတိ ဆိုတဲ့ အဖွား ခုနှစ်ခု ကိုတွက်ထုတ်ပေးမှာဖြစ်ပါတယ်။ ခုနှစ် သက္ကရာဇ်ရယ် မွေးနံ ရယ်ကို ထည့်သွင်းဖို့ လိုအပ်ပါတယ်။ 
### Example Code
```
var baydin = require('baydin');
var mahb = baydin.maharbote(1356,1)//မရဏ
```
## nayNum
ထည့်သွင်းလိုက်တဲ့ စာသားကို နေ့သင့်နံသင်ဂဏန်းအဖြစ်ပြောင်းမှာဖြစ်ပါတယ်။ ဥပမာ-nayNum("မင်းဖြူမှန်မှန်ပြော")//55555
### Example Code
```
var baydin = require('baydin');
var nay = baydin.nayNum("မင်းဖြူမှန်မှန်ပြော")//55555
```
## numerology
၁ ဂဏန်း သမား ၂ ဂဏန်း သမား ၉ ဂဏန်းသမား ဆိုပြီးတော့ အမျိုးအစား ၉ မျိုး ရှိပါတယ်။ တွက်နည်းက မွေးရက် ကို တစ်လုံးတည်းရအောင် ပေါင်းရမှာပါ။ ဥပမာ-၁၁ ဆိုရင် ၂ ဂဏန်းသမားဖြစ်ပါတယ်
### Example Code
```
var baydin = require('baydin');
var nay = baydin.numerology(11)//2
```
## numFormat
ထည့်သွင်းလိုက်တဲ့ ကိန်းဂဏန်းကို စာသားအနေနဲ့ ပြန်ထုတ်ပေးမှာဖြစ်ပါတယ်။ ဥပမာ-numFormat(152)//တစ်ရာငါးဆယ်နှစ်
### Example Code
```
var baydin = require('baydin');
var nay = baydin.numFormat(152)//တစ်ရာငါးဆယ်နှစ်
```
## tatyout
အသက် နဲ့ နေ့နံ ကို ထည့်သွင်းလိုက်မယ် ဆိုရင် သက်ရောက်ကို တွက်ထုတ်ပေးပါတယ်။ စနေ့အတွက် ကိုတော့ သုည မဟုတ်ပဲ 7 ကိုပဲထည့်သွင်းပေးစေလိုပါတယ်။ ဥပမာ-သက်ရောက်(1,1)//1 လို့ တွက်ထုတ်ပေးပါတယ်။
### Example Code
```
var baydin = require('baydin');
var nay = baydin.tatyout(152)//တစ်ရာငါးဆယ်နှစ်
```

