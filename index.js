module.export.calculateIncomeTax = calculateIncomeTax
module.export.calculateEarthquakeRecoveryTax = calculateEarthquakeRecoveryTax
module.export.calculateDetails = calculateDetails

/**
 * Calculates the income tax.
 * @param {number} taxableIncome The taxable income
 */
function calculateIncomeTax(taxableIncome) {
}

/**
 * Calculates the earthquake recovery part of the income tax.
 * @param {number} taxableIncome The taxable income
 */
function calculateEarthquakeRecoveryPart(taxableIncome) {
  return Math.floor(calculateIncomeTax() * 0.021)
}

/**
 * Calculates the resident tax.
 * @param {number} taxableIncome The taxable income
 */
function calculateResidentTax(taxableIncome) {
  return Math.floor(taxableIncome * 0.1)
}

/**
 * Returns the details of
 * @param {number} taxableIncome The taxable income
 */
function calculateDetails(taxableIncome) {
  return {
    incomeTax: calculateIncomeTax(taxableIncome),
    earthquakeRecoveryPart: calculateEarthquakeRecoveryPart(taxableIncome),
    residentTax: calculateResidentTax(taxableIncome)
  }
}
