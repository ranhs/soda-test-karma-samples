import { describe, it, expect, TR, TestBed, ComponentFixture, SodaFixture, fixture, component } from 'soda-test'
import { AppComponent } from 'src/app/app.component';
import { HighlightDirective } from 'src/app/highlight.directive';

//import * as apb from '@angular/platform-browser'
///**/import {By} from '@angular/platform-browser'

@describe('integration')
class IntegrationTest {

    @fixture(AppComponent)
    fixture: SodaFixture<AppComponent>
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

    @it('should rander to the title')
    testText() {
        expect(this.component.title).to.equal('soda-test-karma-samples')
        let deContent = this.fixture.debugElement.query.by.css('.content')
        expect(deContent.nativeElement.innerText).to.contain('soda-test-karma-samples')
    }

    @it('should have all the query methods')
    validateAllQueryMethods() {
        let des = this.fixture.debugElement.queryAll.by.css('.content')
        expect(des.length).to.equal(1)
        let nodes = this.fixture.debugElement.queryAllNodes.by.directive(HighlightDirective)
        nodes = this.fixture.debugElement.queryAllNodes.by.all()
        expect(nodes.length).be.be.greaterThan(0)
    }

    @it('should render the combine strings')
    validateCombineStrings() {
        // let a1 = this.fixture.debugElement.query.by.css('[id=a1]')
        // a1.nativeElement.innerText = "ABC"
        // let a2 = this.fixture.debugElement.query.by.css('[id=a2]')
        // a2.nativeElement.innerText = "123"
        this.component.text1 = 'ABC'
        this.component.text2 = '123'
        this.fixture.detectChanges()
        let d1 = this.fixture.debugElement.query.by.css('[id=d1]')
        expect(d1.nativeElement.innerText).to.equal('ABC123')
    }

    @it('should clear the texts when clicking on clear button')
    validateClear() {
        let b = this.fixture.debugElement.query.by.css('[id=Clear]')
        expect(b.nativeNode.innerText).to.equal('Clear')
        this.component.text1 = 'ABC'
        this.component.text2 = '123'
        b.triggerEventHandler.click()
        expect(this.component.text1).to.equal('')
        expect(this.component.text2).to.equal('')
    }

}