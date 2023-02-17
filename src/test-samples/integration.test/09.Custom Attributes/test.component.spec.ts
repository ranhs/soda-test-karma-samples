import { describe, it, expect, TR, SodaFixture, fixture, component } from 'soda-test'
import { TestComponent } from './test.component'
import { Component, Input } from '@angular/core'


@Component({selector: 'mycomponent'})
class MyComponentStub {
  @Input()
  ikey: string
}

@describe('Test Component')
class TestComponentTest {

  @fixture(TestComponent, {
    declarations: [MyComponentStub]
  })
  fixture: SodaFixture<TestComponent>
  @component(TestComponent)
  component: TestComponent

  @it('binds the mycomponentkey member to the ikey attribute on mycomponent')
  attributeWasUpdated(): TR {
    const mycomponent = this.fixture.queryByCss('mycomponent')
    this.component.mycomponentkey = "test-key-value"
    this.fixture.detectChanges()
    expect(mycomponent.attributes.ikey).to.equal('test-key-value')
  }
}