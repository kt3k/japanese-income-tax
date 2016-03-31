var tax = require('./')
var expect = require('chai').expect

describe('incomeTax', function () {
  it('returns the income tax', function () {
    expect(tax.incomeTax(1005000)).to.equal(50250)
    expect(tax.incomeTax(2005000)).to.equal(103000)
    expect(tax.incomeTax(4005000)).to.equal(373500)
    expect(tax.incomeTax(8005000)).to.equal(1205150)
    expect(tax.incomeTax(8005999)).to.equal(1205150)
    expect(tax.incomeTax(16005000)).to.equal(3745650)
    expect(tax.incomeTax(32005000)).to.equal(10006000)
  })
})

describe('specialIncomeTax', function () {
  it('returns the Recostruction special income tax', function () {
    expect(tax.specialIncomeTax(8005000)).to.equal(25308)
  })
})

describe('totalIncomeTax', function () {
  it('returns the total of the income taxes', function () {
    expect(tax.totalIncomeTax(8005000)).to.equal(1230458)
  })
})

describe('actualIncomeTax', function () {
  it('returns the actual amount of the income taxes which is paid to the government', function () {
    expect(tax.actualIncomeTax(8005000)).to.equal(1230400)
  })
})

describe('residentTax', function () {
  it('returns the income tax', function () {
    expect(tax.incomeTax(8005000)).to.equal(1205150)
  })
})

describe('getDetails', function () {
  it('returns the details of the income based taxes', function () {
    expect(tax.getDetails(8005000)).to.eql({
      incomeTax: 1205150,
      specialIncomeTax: 25308,
      totalIncomeTax: 1230458,
      actualIncomeTax: 1230400,
      residentTax: 800500
    })
  })
})
