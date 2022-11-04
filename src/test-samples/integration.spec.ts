import { describe, it, expect, TR, TestBed, ComponentFixture, fixture, component } from 'soda-test'
import { AppComponent } from 'src/app/app.component';

@describe('integration')
class IntegrationTest {

    @fixture(AppComponent)
    fixture: ComponentFixture<AppComponent>
    @component(AppComponent)
    component: AppComponent

    @it('got the TestBed')
    addBasic(
            @fixture(AppComponent) fixture1: ComponentFixture<AppComponent>,
            @component(AppComponent) component1: AppComponent
        ): TR {
        expect (TestBed).to.exist
        // TestBed.configureTestingModule({
        //     declarations: [ AppComponent ]
        // });
        let fixture: ComponentFixture<AppComponent>
        fixture = TestBed.createComponent(AppComponent)
        expect(fixture).to.exist
        let component = fixture.componentInstance
        expect(component).to.exist
        expect(component.title).to.equal('soda-test-karma-samples')

        expect(this.fixture).to.exist
        component = this.fixture.componentInstance
        expect(component).to.exist
        expect(component.title).to.equal('soda-test-karma-samples')
        expect(this.component).to.exist
        expect(this.component.title).to.equal('soda-test-karma-samples')
        expect(component === this.component).to.be.true


        expect(fixture1).to.exist
        component = fixture1.componentInstance
        expect(component).to.exist
        expect(component.title).to.equal('soda-test-karma-samples')
        expect(component1).to.exist
        expect(component1.title).to.equal('soda-test-karma-samples')
        expect(component1 === component).to.be.true
        expect(component1===this.component).to.be.false
    }

}