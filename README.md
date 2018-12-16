# BayDinJS

> Myanmar Astrology

[![Build Status][travis]][travis-url]
[![code style: prettier][prettier]][prettier-url]
[![npm][npm-download]][npm-dl-url]
[![contributions welcome][contri]][contri-url]
[![License: MIT][license]][license-url]

## Installation

### via npm

```shell
npm install --save baydin
```

### via web

```html
<script src="https://unpkg.com/baydin@latest/dist/client/baydin.min.js"></script>
```

## Test

```shell
npm test
```

## Function List

- [maharbote](#maharbote)
- [nayNum](#nayNum)
- [numerology](#numerology)
- [numFormat](#numFormat)
- [tatyout](#tatyout)

## maharbote

ပုတိ ၊ ဘင်္ဂ ၊ မရဏ ၊ အထွန်း ၊ သိုက် ၊ ရာဇာ ၊ အဓိပတိ ဆိုတဲ့ အဖွား ခုနှစ်ခု ကိုတွက်ထုတ်ပေးမှာဖြစ်ပါတယ်။ ခုနှစ် သက္ကရာဇ်ရယ် မွေးနံ ရယ်ကို ထည့်သွင်းဖို့ လိုအပ်ပါတယ်။

### Example Code

```javascript
var baydin = require('baydin');
var mahb = baydin.maharbote(1356, 1); //မရဏ
```

## nayNum

ထည့်သွင်းလိုက်တဲ့ စာသားကို နေ့သင့်နံသင်ဂဏန်းအဖြစ်ပြောင်းမှာဖြစ်ပါတယ်။ ဥပမာ-nayNum("မင်းဖြူမှန်မှန်ပြော")//55555

### Example Code

```javascript
var baydin = require('baydin');
var nay = baydin.nayNum('မင်းဖြူမှန်မှန်ပြော'); //55555
```

## numerology

၁ ဂဏန်း သမား ၂ ဂဏန်း သမား ၉ ဂဏန်းသမား ဆိုပြီးတော့ အမျိုးအစား ၉ မျိုး ရှိပါတယ်။ တွက်နည်းက မွေးရက် ကို တစ်လုံးတည်းရအောင် ပေါင်းရမှာပါ။ ဥပမာ-၁၁ ဆိုရင် ၂ ဂဏန်းသမားဖြစ်ပါတယ်

### Example Code

```javascript
var baydin = require('baydin');
var numero = baydin.numerology(11); //2
```

## numFormat

ထည့်သွင်းလိုက်တဲ့ ကိန်းဂဏန်းကို စာသားအနေနဲ့ ပြန်ထုတ်ပေးမှာဖြစ်ပါတယ်။ ဥပမာ-numFormat(152)//တစ်ရာငါးဆယ်နှစ်

### Example Code

```javascript
var baydin = require('baydin');
var numF = baydin.numFormat(152); //တစ်ရာငါးဆယ်နှစ်
```

## tatyout

အသက် နဲ့ နေ့နံ ကို ထည့်သွင်းလိုက်မယ် ဆိုရင် သက်ရောက်ကို တွက်ထုတ်ပေးပါတယ်။ စနေ့အတွက် ကိုတော့ သုည မဟုတ်ပဲ 7 ကိုပဲထည့်သွင်းပေးစေလိုပါတယ်။ ဥပမာ-သက်ရောက်(1,1)//1 လို့ တွက်ထုတ်ပေးပါတယ်။

### Example Code

```javascript
var baydin = require('baydin');
var ty = baydin.tatyout(1, 1); //1
```

## License

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)

[contri]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square
[contri-url]: https://github.com/AungMyoKyaw/BayDin/issues
[travis]: https://img.shields.io/travis/AungMyoKyaw/BayDin/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/AungMyoKyaw/BayDin
[npm-download]: https://img.shields.io/npm/dt/baydin.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/baydin
[license]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
