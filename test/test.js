'use strict';

var expect = require('chai').expect;
var manhattan = require('../index');

describe('#manhattan', function() {
    it('12.795251, 80.198697,12.8708,80.1078', function() {
        var result = manhattan(12.795251, 80.198697,12.8708,80.1078);
        expect(result).to.equal('18.51KM');
    });
    
});