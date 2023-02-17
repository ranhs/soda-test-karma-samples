import { describe, it, expect, TR, SodaFixture, fixture, component } from 'soda-test'
import { FormsModule } from '@angular/forms'
import { TestComponent } from './test.component'

@describe('Test Component')
class TestComponentTest {

  @fixture(TestComponent,{imports: [FormsModule]})
  fixture: SodaFixture<TestComponent>
  @component(TestComponent)
  component: TestComponent

  @it('should update text')
  updateText(): TR {
    const tb = this.fixture.queryByCss('input')
    expect(tb.text).to.equal('test.component works!')
    this.component.title = "new text"
    this.fixture.detectChanges()
    expect(tb.text).to.equal('new text')
  }

  @it('should update from model')
  updateFromModel(): TR {
    const tb = this.fixture.queryByCss('input')
    expect(tb.text).to.equal('test.component works!')
    console.log(typeof tb.nativeElement.innerText)
    tb.text = "text2"
    expect(this.component.title).to.equal('text2')
    this.fixture.detectChanges()
    console.log(tb.nativeElement)
  }
}