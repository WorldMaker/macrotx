/// <amd-dependency path="text!./class.html" />
import ko = require('knockout');
import game = require('../components/game-page/game');
export var template: string = require("text!./class.html");

export class viewModel {
	game = ko.observable<game.Game>();

	constructor(params) {
		if (params && params.game) {
			this.game = params.game;
		}
	}

	sjw() {
		this.game().className('Social Justice Warrior');
	}

	enchanter() {
		this.game().className('Enchanter');
	}

	chef() {
		this.game().className('Chef');
	}
}
