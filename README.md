# BayDinJS

> Myanmar Astrology Library for JavaScript

[![code style: prettier][prettier]][prettier-url]
[![npm][npm-download]][npm-dl-url]
[![contributions welcome][contri]][contri-url]
[![License: MIT][license]][license-url]

A JavaScript library for Myanmar traditional astrology calculations including maharbote, numerology, zodiac signs, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
  - [maharbote](#maharboteyear-day)
  - [nayNum](#naynumstr)
  - [numerology](#numerologynum)
  - [numFormat](#numformatnum)
  - [tatyout](#tatyoutage-day)
  - [chineseZodiac](#chinesezodiacyear)
  - [zodiac](#zodiacday-month)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

### via npm

```shell
npm install --save baydin
```

### via yarn

```shell
yarn add baydin
```

### via web (CDN)

```html
<script src="https://unpkg.com/baydin@latest/dist/client/baydin.min.js"></script>
```

## Usage

### Node.js

```javascript
const baydin = require("baydin");

// Calculate maharbote
const maharboteResult = baydin.maharbote(1356, 1);
console.log(maharboteResult); // "မရဏ"

// Get numerology number
const numerologyResult = baydin.numerology(11);
console.log(numerologyResult); // 2
```

### Browser

```html
<script src="https://unpkg.com/baydin@latest/dist/client/baydin.min.js"></script>
<script>
  const maharboteResult = baydin.maharbote(1356, 1);
  console.log(maharboteResult); // "မရဏ"
</script>
```

## API Reference

### maharbote(year, day)

Calculates the maharbote (astrological influence) based on Myanmar calendar year and birth day of the week.

ပုတိ ၊ ဘင်္ဂ ၊ မရဏ ၊ အထွန်း ၊ သိုက် ၊ ရာဇာ ၊ အဓိပတိ ဆိုတဲ့ အဖွား ခုနှစ်ခု ကိုတွက်ထုတ်ပေးမှာဖြစ်ပါတယ်။

**Parameters:**
- `year` (number): Myanmar calendar year (e.g., 1356)
- `day` (number): Day of the week (1-7, where 1 = Sunday, 7 = Saturday)

**Returns:** (string) The maharbote name in Myanmar

**Example:**
```javascript
baydin.maharbote(1356, 1); // "မရဏ"
```

---

### nayNum(str)

Converts Myanmar text to its numerological equivalent (nay num).

ထည့်သွင်းလိုက်တဲ့ စာသားကို နေ့သင့်နံသင့်ဂဏန်းအဖြစ်ပြောင်းမှာဖြစ်ပါတယ်။

**Parameters:**
- `str` (string): Myanmar text string

**Returns:** (number) The numerological number

**Example:**
```javascript
baydin.nayNum("မင်းဖြူမှန်မှန်ပြော"); // 55555
```

---

### numerology(num)

Calculates the single-digit numerology number from any number.

၁ ဂဏန်း သမား ၂ ဂဏန်း သမား ၉ ဂဏန်းသမား ဆိုပြီးတော့ အမျိုးအစား ၉ မျိုး ရှိပါတယ်။ တွက်နည်းက မွေးရက် ကို တစ်လုံးတည်းရအောင် ပေါင်းရမှာပါ။

**Parameters:**
- `num` (number): Any positive number

**Returns:** (number) Single digit number (1-9)

**Example:**
```javascript
baydin.numerology(11); // 2 (1 + 1 = 2)
baydin.numerology(29); // 2 (2 + 9 = 11, 1 + 1 = 2)
```

---

### numFormat(num)

Converts a number to Myanmar words.

ထည့်သွင်းလိုက်တဲ့ ကိန်းဂဏန်းကို စာသားအနေနဲ့ ပြန်ထုတ်ပေးမှာဖြစ်ပါတယ်။

**Parameters:**
- `num` (number): Number to convert (supports up to 14 digits)

**Returns:** (string) Number in Myanmar words

**Example:**
```javascript
baydin.numFormat(152); // "တစ်ရာငါးဆယ်နှစ်"
```

---

### tatyout(age, day)

Calculates the tatyout (life influence) based on age and birth day of the week.

အသက် နဲ့ နေ့နံ ကို ထည့်သွင်းလိုက်မယ် ဆိုရင် သက်ရောက်ကို တွက်ထုတ်ပေးပါတယ်။

**Parameters:**
- `age` (number): Age in years
- `day` (number): Day of the week (1-7, where 7 = Saturday)

**Returns:** (number) The tatyout number (1-7)

**Example:**
```javascript
baydin.tatyout(1, 1); // 1
```

---

### chineseZodiac(year)

Gets the Chinese zodiac sign for a given year.

**Parameters:**
- `year` (number): Gregorian calendar year (positive integer)

**Returns:** (Object) Object containing `sign` (English) and `signInBurmese` (Myanmar)

**Example:**
```javascript
baydin.chineseZodiac(2024);
// { sign: "Dragon", signInBurmese: "နဂါး" }
```

---

### zodiac(day, month)

Gets the Western zodiac sign based on birth date.

**Parameters:**
- `day` (number): Day of birth (1-31)
- `month` (number): Month of birth (1-12)

**Returns:** (Object) Object containing `sign` (English) and `sign_mm` (Myanmar)

**Throws:** Error if invalid date or month input

**Example:**
```javascript
baydin.zodiac(15, 3);
// { sign: "Pisces", sign_mm: "မိန်" }
```

## Development

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Setup

```shell
git clone https://github.com/AungMyoKyaw/BayDin.git
cd BayDin
npm install
```

### Build

```shell
npm run build
```

This will create:
- `dist/node/` - Node.js compatible build
- `dist/client/` - Browser compatible minified build

## Testing

```shell
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Aung Myo Kyaw - [GitHub](https://github.com/AungMyoKyaw)

[contri]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square
[contri-url]: https://github.com/AungMyoKyaw/BayDin/issues
[npm-download]: https://img.shields.io/npm/dt/baydin.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/baydin
[license]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
