import { describe, it, expect, TR, SodaFixture, fixture, component } from 'soda-test'
import { FormsModule } from '@angular/forms'
import { ConcaterComponent } from './concater.component'

@describe('Test Component')
class TestComponentTest {

  @fixture(ConcaterComponent,{imports: [FormsModule]})
  fixture: SodaFixture<ConcaterComponent>
  @component(ConcaterComponent)
  component: ConcaterComponent

  @it('should update text')
  updateText(): TR {
    const tb1 = this.fixture.queryByCss('[id=a1]')
    const tb2 = this.fixture.queryByCss('[id=a2]')
    const div = this.fixture.queryByCss('[id=d1]')
    tb1.text = "ABC"
    tb2.text = "123"
    this.fixture.detectChanges();
    expect(div.text).to.equal('ABC123')
    tb1.text = "ABCD"
    this.fixture.detectChanges();
    expect(div.text).to.equal('ABCD123')
  }
}