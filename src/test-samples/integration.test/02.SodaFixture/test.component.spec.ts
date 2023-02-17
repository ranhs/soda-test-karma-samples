import { describe, it, expect, TR, SodaFixture, fixture, component } from 'soda-test'
import { TestComponent } from './test.component'

@describe('Test Component')
class TestComponentTest {

  @fixture(TestComponent)
  fixture: SodaFixture<TestComponent>
  @component(TestComponent)
  component: TestComponent

  @it('should create')
  validateCreate(): TR {
    expect(this.component).to.exist
  }
}

@describe('Test Component2')
class TestComponent2Test {
    @it('should create')
    validateCreate(
        @fixture(TestComponent) fixture: SodaFixture<TestComponent>, 
        @component(TestComponent) component: TestComponent
        ): TR {
      expect(component).to.exist
    }
  
}
