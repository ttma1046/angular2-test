import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-joke',
	templateUrl: './joke.component.html',
})
export class JokeComponent implements OnInit {
	joke: string;
	title = 'Chuck Norris Jokes';

	constructor(private jokeService: JokeService) { }

	ngOnInit() {
        this.getJoke();
	}

	getJoke() {
		this.jokeService.getJoke()
			.subscribe(joke: any => this.joke = joke);
	}
}
