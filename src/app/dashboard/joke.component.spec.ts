import { JokeComponent } from './joke.component';

describe('Component: Joke Component', () => {
    let component: JokeComponent;
    beforeEach(() => {
        component = new JokeComponent(null);
    });

    it(`should add 1 + 1`, () => {
        expect(1 + 1).toEqual(2);
    });

    it(`should have a title 'Chuck Norris Jokes'`, () => {
        const component = new JokeComponent(null);
        expect(component.title).toEqual('Chuck Norris Jokes');
    });

    let fakeJokeService = {
        getJoke: () => Observable.of('FAKE_JOKE');
    };

    it(`fakeJokeService: should have a title 'Chuck Norris Jokes'`, () => {
        const component = new JokeComponent(fakeJokeService);
        expect(component.title).toEqual('Chuck Norris Jokes');
    });

    let fakeJokeService2 = jasmine.createSpyObj('jokeService', ['getJoke']);
    fakeJokeService.getJoke.and.returnValue(Observable.of('FAKE JOKE'));

    it(`fakeJokeService2: should have a title 'Chuck Norris Jokes'`, () => {
        const component = new JokeComponent(fakeJokeService2);
        expect(component.title).toEqual('Chuck Norris Jokes');
    });

    spyOn(jokeService, 'getJoke').and.returnValue(Observable.of(('FAKE JOKE'));

    expect(jokeService.getJoke).toHaveBeenCalled();

    expect(jokeService.getJoke).toHaveBeenCalledTimes(2);

    expect(jokeService.getJokeByType).toHaveBeenCalledWith('DadJokes');

    it(`should set the joke property on the component`, () => {
        
    });
});
