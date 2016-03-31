# japanese-income-tax v1.0.1 [![Circle CI](https://circleci.com/gh/kt3k/japanese-income-tax.svg?style=svg)](https://circleci.com/gh/kt3k/japanese-income-tax) [![codecov.io](https://codecov.io/github/kt3k/japanese-income-tax/coverage.svg?branch=master)](https://codecov.io/github/kt3k/japanese-income-tax?branch=master)

> A tool for calculating Japanese income tax.

This tool calculates Japanese income tax from the given taxable income.

This tool is based on the rules for 2016.

# Install

Via npm:

    npm install japanese-income-tax

# API

```js
var tax = require('japanese-income-tax')
```

## tax.incomeTax(taxableIncome)

- @param {number} taxableIncome The taxable income
- @return {number}

Calculates the income tax.

## tax.specialIncomeTax(taxableIncome)

- @param {number} taxableIncome The taxable income
- @return {number}

Calculates the Reconstruction special income tax.

## tax.totalIncomeTax(taxableIncome)

- @param {number} taxableIncome The taxable income
- @return {number}

Returns the total of the income tax and the special income tax.

## tax.actualIncomeTax(taxableIncome)

- @param {number} taxableIncome The taxable income
- @return {number}

Returns the actual amount you need to pay to the tax office.

## tax.residentTax(taxableIncome)

- @param {number} taxableIncome The taxable income
- @return {number}

Calculates the resident tax.

# Example

```
> var tax = require('japanese-income-tax')
> tax.incomeTax(8005000)
1205150
> tax.specialIncomeTax(8005000)
25308
> tax.totalIncomeTax(8005000)
1230458
> tax.actualIncomeTax(8005000)
1230400
> tax.residentTax(8005000)
800500
```

# License

MIT
