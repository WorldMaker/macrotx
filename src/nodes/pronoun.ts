/// <amd-dependency path="text!./pronoun.html" />
import ko = require('knockout');
import game = require('../components/game-page/game');
export var template: string = require("text!./pronoun.html");

export class viewModel {
	game = ko.observable<game.Game>();

	constructor(params) {
		if (params && params.game) {
			this.game = params.game;
		}
	}

	she() {
		this.game().pronoun('she');
	}

	he() {
		this.game().pronoun('he');
	}

	they() {
		this.game().pronoun('they');
	}
}
