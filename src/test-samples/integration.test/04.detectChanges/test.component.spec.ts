import { describe, it, expect, TR, SodaFixture, fixture, component } from 'soda-test'
import { TestComponent } from './test.component'

@describe('Test Component')
class TestComponentTest {

  @fixture(TestComponent)
  fixture: SodaFixture<TestComponent>
  @component(TestComponent)
  component: TestComponent

  @it('have initial text')
  initialText(): TR {
    let p = this.fixture.queryByCss('p')
    expect(p.text).to.equal('test.component works!')
  }

  @it('should update text')
  updateText(): TR {
    const p = this.fixture.queryByCss('p')
    this.component.title = "new text"
    this.fixture.detectChanges()
    expect(p.text).to.equal('new text')
  }
}