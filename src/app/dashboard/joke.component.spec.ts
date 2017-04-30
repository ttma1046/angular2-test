import { DebugElement } from '@angular/core';
import { JokeComponent } from './joke.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { TestBed, ComponentFixture, async,  fakeAsync, tick } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { JokeService } from '../shared/joke.service';
import { By } from '@angular/platform-browser';

describe('Component: Joke Component', () => {
    let component: JokeComponent;
    let fakeJokeService: any;
    let fakeJokeService2: any;

    let fixture: ComponentFixture<JokeComponent>;
    let jokeService: any;

    let de: DebugElement;

    beforeEach(() => {
        /*
        fakeJokeService = {
            getJoke: () => Observable.of('FAKE JOKE');
        };

        fakeJokeService2 = jasmine.createSpyObj(fakeJokeService, ['getJoke']);
        fakeJokeService2.getJoke.and.returnValue(Observable.of('FAKE JOKE'));

        component = new JokeComponent(fakeJokeService);
        */

        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [JokeComponent],
            providers: [JokeService]
        });

        fixture = TestBed.createComponent(JokeComponent);

        component = fixture.componentInstance;

        de = fixture.debugElement;

        jokeService = TestBed.get(JokeService);
    });

    it(`should add 1 + 1`, () => {
        expect(1 + 1).toEqual(2);
    });

    it(`should have a title 'Chuck Norris Jokes'`, () => {
        component = new JokeComponent(null);
        expect(component.title).toEqual('Chuck Norris Jokes');
    });

    it(`fakeJokeService: should have a title 'Chuck Norris Jokes'`, () => {
        component = new JokeComponent(fakeJokeService);
        expect(component.title).toEqual('Chuck Norris Jokes');
    });

    it(`fakeJokeService2: should have a title 'Chuck Norris Jokes'`, () => {
        component = new JokeComponent(fakeJokeService2);
        expect(component.title).toEqual('Chuck Norris Jokes');
    });

    expect(jokeService.getJoke).toHaveBeenCalled();

    expect(jokeService.getJoke).toHaveBeenCalledTimes(2);

    expect(jokeService.getJokeByType).toHaveBeenCalledWith('DadJokes');

    it(`should set the joke property on the component`, () => {
        spyOn(jokeService, 'getJoke').and.returnValue(Observable.of(('FAKE JOKE'));

        component.ngOnInit();

        expect(component.joke).toEqual('FAKE JOKE');
    });

    it(`should have bound a joke to the DOM`, () => {
        spyOn(jokeService, 'getJoke').and.returnValue(Observable.of('FAKE JOKE'));

        fixture.detectChanges();

        const joke = de.query(By.css('p')).nativeElement;

        expect(joke.textContent).toEqual('FAKE JOKE');
    });

    it(`should get next quote on button click`, fakeAsync(() => {
        spyOn(jokeService, 'getJoke')
            .and.returnValues(
            Observable.of('FAKE JOKE'),
            Observable.of('FAKE JOKE 2').timeout(2000));

        fixture.detectChanges();

        const joke = de.query(By.css('p')).nativeElement;

        expect(joke.textContent).toEqual('FAKE JOKE');

        const button = de.query(By.css('button')).nativeElement;
        button.click();
        tick(3000);
        fixture.detectChanges();
        expect(joke.textContent).toEqual('FAKE JOKE 2');

    }));

    it(`should get next quote on button click`, async(() => {
        spyOn(jokeService, 'getJoke')
            .and.returnValues(
            Observable.of('FAKE JOKE'),
            Observable.of('FAKE JOKE 2').timeout(2000));

        fixture.detectChanges();

        const joke = de.query(By.css('p')).nativeElement;

        expect(joke.textContent).toEqual('FAKE JOKE');

        const button = de.query(By.css('button')).nativeElement;
        button.click();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(joke.textContent).toEqual('FAKE JOKE 2');
        });

    }));

});














