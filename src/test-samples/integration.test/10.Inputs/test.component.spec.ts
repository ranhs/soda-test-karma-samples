import { describe, it, expect, TR, SodaFixture, fixture, component } from 'soda-test'
import { TestComponent } from './test.component'

@describe('Test Component')
class TestComponentTest {

  @fixture(TestComponent, {inputs: ['t1']})
  fixture: SodaFixture<TestComponent>
  @component(TestComponent)
  component: TestComponent

  @it('should bind the t1 input to the t1 member')
  validateInput(): TR {
    this.fixture.inputs.t1 = 'TestText'
    this.fixture.detectChanges();
    expect(this.component.t1).to.equal('TestText')
  }

  @it('should have the text of the t1 input')
  validateInputInView(): TR {
    this.fixture.inputs.t1 = 'Text to Display'
    this.fixture.detectChanges();
    const div = this.fixture.queryByCss('div')
    expect(div.text).to.equal('Text to Display')
  }
}