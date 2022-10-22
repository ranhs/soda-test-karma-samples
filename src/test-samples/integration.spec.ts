import { describe, it, expect, TR, TestBed, ComponentFixture } from 'soda-test'
import { AppComponent } from 'src/app/app.component';

@describe('integration')
class IntegrationTest {

    @it('got the TestBed')
    addBasic(): TR {
        expect (TestBed).to.exist
        TestBed.configureTestingModule({
            declarations: [ AppComponent ]
        });
        let fixture: ComponentFixture<AppComponent>
        fixture = TestBed.createComponent(AppComponent)
        expect(fixture).to.exist
        let component = fixture.componentInstance
        expect(component).to.exist
        expect(component.title).to.equal('soda-test-karma-samples')

        expect(true).to.be.true
    }

}