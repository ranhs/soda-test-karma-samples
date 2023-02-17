import { describe, it, expect, TR, SodaFixture, fixture, component } from 'soda-test'
import { FormsModule } from '@angular/forms'
import { TestComponent } from './test.component'

@describe('Test Component')
class TestComponentTest {

  @fixture(TestComponent)
  fixture: SodaFixture<TestComponent>
  @component(TestComponent)
  component: TestComponent

  @it('advance the counter when clicking the button')
  clickTheButton(): TR {
    expect(this.component.count).to.equal(0)
    const button = this.fixture.queryByCss('button')
    button.triggerEventHandler.click()
    expect(this.component.count).to.equal(1)
  }
}