/// <amd-dependency path="text!./game.html" />
import ko = require('knockout');
export var template: string = require("text!./game.html");

export class Game {
	node = ko.observable<string>('node!race');

	race = ko.observable<string>();	
	className = ko.observable<string>('');
}

export class viewModel {
	game = ko.observable<Game>();

	constructor() {
		this.restart();
	}

	restart() {
		this.game(new Game());
	}
}
