/// <amd-dependency path="text!./game.html" />
import ko = require('knockout');
export var template: string = require("text!./game.html");

export class Game {
	race = ko.observable<string>();	
}

export class viewModel {
	game = ko.observable<Game>(new Game());

	restart() {
		this.game(new Game());
	}
}
