import { describe, it, expect, TR, TestBed } from 'soda-test'
import { AppComponent } from 'src/app/app.component';

@describe('integration')
class IntegrationTest {

    @it('got the TestBed')
    addBasic(): TR {
        TestBed.configureTestingModule({
            declarations: [ AppComponent ]
        });
        expect(true).to.be.true
    }

}