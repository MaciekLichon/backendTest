const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return an error if "fullName" arg is not a string or is missing', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg does not consist of 2 words', () => {
    expect(formatFullname('Name')).to.equal('Error');
    expect(formatFullname('Name Lastname Test')).to.equal('Error');
  });

  it('should return capitalized "Firstname Lastname" for any 2-word input', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('joHN DoE')).to.equal('John Doe');
  });

});
