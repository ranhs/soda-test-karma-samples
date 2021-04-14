import { describe, SinonStub, stub, it, TR, expect, context, beforeEach } from 'soda-test'

import { isString } from './utils'

@describe('utils')
class UtilsTest {

@context('isString')
    @stub('underscore','isString').returns(true)
    iStringStub: SinonStub

    @it('should call _.isString and return true')
    isString(): TR {
        expect(isString(4)).to.be.true
        expect(this.iStringStub).to.have.been.calledOnce
    }

@context('isString default')
    @it('should return false when no stub')
    isString1(): TR {
        expect(isString(4)).to.be.false
    }
}

