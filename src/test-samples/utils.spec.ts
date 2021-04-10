import { describe, SinonStub, stub, it, TR, expect, context, beforeEach } from 'soda-test'

import * as crypto from 'crypto'
import { getHash, isString } from './utils'

@describe('utils')
class UtilsTest {

    /* does not support stubbing buildin libraray (crypto) */
// 
// TBD: check way this direct stubbing does not work
@context('isString')
//    @stub('underscore','isString').returns(true)
//    iStringStub: SinonStub

    @it('should call _.isString and return true')
    isString(): TR {
        // expect(isString(4)).to.be.true
        // expect(this.iStringStub).to.have.been.calledOnce
    }
}

