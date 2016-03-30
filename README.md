# japanese-income-tax v0.1.0 (WIP)

> A tool for calculating Japanese income tax.

This tool calculates Japanese income tax from the given taxable income.

This tool based on the rules for 2016. The result includes the Great East Japan Earthquake Recovery Special tax (GEJERST).

# API

```js
var tax = require('japanese-income-tax')
```

## tax.calculateIncomeTax(taxableIncome)

- @param {number} taxableIncome The taxable income
- @return {number} The income tax

Calculates the income tax.

## tax.calculateEarthquakeRecovertPart(taxableIncome)

- @param {number} taxableIncome The taxable income
- @return {number} The Earthquake Recovery part of the income tax

Calculates the Earthquake Recovery part of the income tax.

## tax.calculateResidentTax(taxableIncome)

- @param {number} taxableIncome The taxable income
- @return {number} The resident tax

Calculates the resident tax.

# Notes

- The actual value you pay to the tax bureau is rounded down 3 digits. For example, if your income tax is 1,234,567, the amount you actually pay is 1,234,000.
- In Japan, the income tax is paid to the tax bureau and the resident tax is paid to the city hall.
