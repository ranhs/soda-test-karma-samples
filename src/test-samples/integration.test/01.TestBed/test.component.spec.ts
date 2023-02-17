import { describe, it, expect, TR, ComponentFixture, TestBed } from 'soda-test'
import { TestComponent } from './test.component'

@describe('Test Component')
class TestComponentTest {
  component: TestComponent
  fixture: ComponentFixture<TestComponent>

  beforeEach(): void {
    this.fixture = TestBed.createComponent(TestComponent)
    this.component = this.fixture.componentInstance
    this.fixture.detectChanges()
  }

  @it('shuld create')
  validateCreate(): TR {
    expect(this.component).to.exist
  }
}
