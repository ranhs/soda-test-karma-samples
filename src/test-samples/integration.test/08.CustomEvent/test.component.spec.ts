import { describe, it, expect, TR, SodaFixture, fixture, component, CommonEvents, spy, SinonSpy } from 'soda-test'
import { TestComponent } from './test.component'
import { Component } from '@angular/core'

interface MyEvents extends CommonEvents {
  ievent(data: any): void
}

@Component({selector: 'mycomponent'})
class MyComponentStub {
}

@describe('Test Component')
class TestComponentTest {

  @fixture(TestComponent, {
    declarations: [MyComponentStub],
    events: ['ievent']
  })
  fixture: SodaFixture<TestComponent, MyEvents>
  @component(TestComponent)
  component: TestComponent

  @it('call onMyComponentEvent() method of the event data when ievent is raised from mycomponent')
  eventWasCalled( @spy(TestComponent.prototype, 'onMyComponentEvent') onMyComponentEventSpy: SinonSpy): TR {
    const mycomponent = this.fixture.queryByCss('mycomponent')
    mycomponent.triggerEventHandler.ievent("test-data")
    expect(onMyComponentEventSpy).to.have.been.calledWithExactly('test-data')
  }
}

