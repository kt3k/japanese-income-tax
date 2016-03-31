module.exports.incomeTax = incomeTax
module.exports.specialIncomeTax = specialIncomeTax
module.exports.totalIncomeTax = totalIncomeTax
module.exports.actualIncomeTax = actualIncomeTax
module.exports.residentTax = residentTax
module.exports.getDetails = getDetails

/**
 * @param {number} num The number to round
 * @return {number}
 */
function roundThousand(num) {
  return Math.floor(num / 1000) * 1000
}

/**
 * @param {number} num The number to round
 * @return {number}
 */
function roundHundred(num) {
  return Math.floor(num / 100) * 100
}

const C0 = 1950000
const C1 = 3300000
const C2 = 6950000
const C3 = 9000000
const C4 = 18000000

const C0_RATE = 0.05
const C1_RATE = 0.10
const C2_RATE = 0.20
const C3_RATE = 0.23
const C4_RATE = 0.33
const C5_RATE = 0.40

const C0_DEDUCE = 0
const C1_DEDUCE = 97500
const C2_DEDUCE = 427500
const C3_DEDUCE = 636000
const C4_DEDUCE = 1536000
const C5_DEDUCE = 2796000

/**
 * Calculates the income tax.
 * @param {number} taxableIncome The taxable income
 * @return {number}
 */
function incomeTax(taxableIncome) {
  var x = roundThousand(taxableIncome)

  if (x <= C0) {
    return x * C0_RATE - C0_DEDUCE
  } else if (x <= C1) {
    return x * C1_RATE - C1_DEDUCE
  } else if (x <= C2) {
    return x * C2_RATE - C2_DEDUCE
  } else if (x <= C3) {
    return x * C3_RATE - C3_DEDUCE
  } else if (x <= C4) {
    return x * C4_RATE - C4_DEDUCE
  } else {
    return x * C5_RATE - C5_DEDUCE
  }
}

/**
 * Calculates the Reconstruction special income tax.
 * @param {number} taxableIncome The taxable income
 * @return {number}
 */
function specialIncomeTax(taxableIncome) {
  return Math.floor(incomeTax(taxableIncome) * 0.021)
}

/**
 * @param {number} taxableIncome The taxable income
 * @return {number}
 */
function totalIncomeTax(taxableIncome) {
  return incomeTax(taxableIncome) + specialIncomeTax(taxableIncome)
}

/**
 * @param {number} taxableIncome The taxable income
 * @return {number}
 */
function actualIncomeTax(taxableIncome) {
  return roundHundred(totalIncomeTax(taxableIncome))
}

/**
 * Calculates the resident tax.
 * @param {number} taxableIncome The taxable income
 * @return {number}
 */
function residentTax(taxableIncome) {
  return Math.floor(taxableIncome * 0.1)
}

/**
 * Returns the details of income based taxes.
 * @param {number} taxableIncome The taxable income
 * @return {number}
 */
function getDetails(taxableIncome) {
  return {
    incomeTax: incomeTax(taxableIncome),
    specialIncomeTax: specialIncomeTax(taxableIncome),
    totalIncomeTax: totalIncomeTax(taxableIncome),
    actualIncomeTax: actualIncomeTax(taxableIncome),
    residentTax: residentTax(taxableIncome)
  }
}
