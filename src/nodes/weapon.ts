/// <amd-dependency path="text!./weapon.html" />
import ko = require('knockout');
import game = require('../components/game-page/game');
export var template: string = require("text!./weapon.html");

export class viewModel {
	game = ko.observable<game.Game>();
	exciting = ko.observable(false);

	constructor(params) {
		if (params && params.game) {
			this.game = params.game;
		}
	}

	winks() {
		this.game().weapon('Arsenal of Sly Winks');
	}

	clothes() {
		this.game().weapon('Foppish Clothes');
	}

	swagger() {
		this.game().weapon('Sophisticated Swagger');
	}

	nextExciting() {
		this.exciting(true);
	}

	nextPassion() {
		this.game().node('node!boss');
	}
}
