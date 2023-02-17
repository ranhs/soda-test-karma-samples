import { describe, it, expect, TR, SodaFixture, fixture } from 'soda-test'
import { TestComponent } from './test.component'

@describe('Test Component')
class TestComponentTest {

  @fixture(TestComponent)
  fixture: SodaFixture<TestComponent>

  @it('have paragraph with expected text')
  validateParagraph(): TR {
    const p = this.fixture.queryByCss('p')
    expect(p.text).to.equal('test.component works!')
  }
}