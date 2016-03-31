var tax = require('./')
var expect = require('chai').expect

describe('incomeTax', function () {
  it('returns the income tax', function () {
    expect(tax.incomeTax(8005000)).to.equal(1205150)
  })
})

describe('specialIncomeTax', function () {
})
