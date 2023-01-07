import { describe, it, expect, TR, TestBed, ComponentFixture, SodaFixture, fixture, component, addEvents, SodaDebugElement, context, beforeEach } from 'soda-test'
import { AppComponent, MyComponentComponent } from 'src/app/app.component';
import { HighlightDirective } from 'src/app/highlight.directive';
import { FormsModule } from '@angular/forms';


interface MyComponentEvent {
    ievent(data: any): void
}

addEvents('ievent')

@describe('integration1')
class IntegrationTest1 {
    @it('got the TestBed')
    addBasic(
            @fixture(AppComponent, {declarations: [MyComponentComponent], imports: [FormsModule]}) fixture1: ComponentFixture<AppComponent>,
            @component(AppComponent) component1: AppComponent
        ): TR {
        expect (TestBed).to.exist
        let fixture: ComponentFixture<AppComponent>
        fixture = TestBed.createComponent(AppComponent)
        expect(fixture).to.exist
        let component = fixture.componentInstance
        expect(component).to.exist
        expect(component.title).to.equal('soda-test-karma-samples')

        expect(fixture1).to.exist
        component = fixture1.componentInstance
        expect(component).to.exist
        expect(component.title).to.equal('soda-test-karma-samples')
        expect(component1).to.exist
        expect(component1.title).to.equal('soda-test-karma-samples')
        expect(component1 === component).to.be.true
    }
}

@describe('integration')
class IntegrationTest {
    @fixture(AppComponent, {
        declarations: [MyComponentComponent],
        imports: [FormsModule]
    })
    fixture: SodaFixture<AppComponent>
    @component(AppComponent)
    component: AppComponent

    @it('got the TestBed')
    addBasic(): TR {
        expect (TestBed).to.exist
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
        let a1 = this.fixture.queryByCss('[id=a1]')
        a1.text = "ABC"
        let a2 = this.fixture.queryByCss('[id=a2]')
        a2.text = "123"
        this.fixture.detectChanges()
        let d1 = this.fixture.queryByCss('[id=d1]')
        expect(d1.text).to.equal('ABC123')
    }

    @it('should clear the texts when clicking on clear button')
    validateClear() {
        let b = this.fixture.queryByCss('[id=Clear]')
        expect(b.nativeNode.innerText).to.equal('Clear')
        this.component.text1 = 'ABC'
        this.component.text2 = '123'
        b.triggerEventHandler.click()
        expect(this.component.text1).to.equal('')
        expect(this.component.text2).to.equal('')
    }

    @it('should bind the "mycomponentkey" to mycomponent "ikey" input')
    validateInput() {
        this.component.mycomponentkey = 'the_key!!!'
        this.fixture.detectChanges()
        let mc = this.fixture.queryByCss('mycomponent')
        expect(mc).to.exist
        expect(mc.componentInstance['ikey']).to.equal('the_key!!!')
    }

    @it('should bind the mycomponent "ievent" event to onMyComponentEvent method')
    validateOutput() {
        let mc = this.fixture.queryByCss<MyComponentEvent>('mycomponent')
        mc.triggerEventHandler.ievent({data: 'xxx'})
        expect(this.component.eventCalls).to.deep.equal([{data:'xxx'}])
    }
}
