import { describe, it, TR, pending } from 'soda-test'

@describe('nested test')
class NestedTest {
    @it('this is from the nested file')
    @pending()
    dummy(): TR {
        // placeholder
    }
}