import { describe, it, expect, TR, SodaFixture, fixture, component } from 'soda-test'
import { TestComponent } from './test.component'
import { FormsModule } from '@angular/forms'

@describe('Test Component')
class TestComponentTest {

  @fixture(TestComponent, {
    imports: [FormsModule],
    outputs: ['t1']
  })
  fixture: SodaFixture<TestComponent>
  @component(TestComponent)
  component: TestComponent

  @it('should bind the t1 member event to the t1 output')
  validateInput(): TR {
    const t1Calls: string[] = []
    this.fixture.events.on('t1', (data: string)=> t1Calls.push(data))
    this.component.t1.emit('DumyEventData')
    expect(t1Calls).to.deep.equal(['DumyEventData'])
  }

  @it('should send the text from the text-box to the output')
  validateInputInView(): TR {
    const t1Calls: string[] = []
    this.fixture.events.on('t1', (data: string)=> t1Calls.push(data))
    const tb = this.fixture.queryByCss('input')
    const button = this.fixture.queryByCss('button')
    tb.text = 'Text-Box Text'
    this.fixture.detectChanges()
    button.triggerEventHandler.click()
    expect(t1Calls).to.deep.equal(['Text-Box Text'])
  }
}