import $ = require("jquery");
import ko = require("knockout");
import bootstrap = require("bootstrap");
import router = require("./router");

// Components can be packaged as AMD modules, such as the following:
ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
ko.components.register('home-page', { require: 'components/home-page/home' });
ko.components.register('game-page', { require: 'components/game-page/game' });

// ... or for template-only components, you can just point to a .html file directly:
ko.components.register('about-page', {
  template: { require: 'text!components/about-page/about.html' }
});

// ** Lazy nodes; all AMD all the time **
class NodeLoader {
	getConfig(name: string, callback) {
		var match = /^node!(.*)/.exec(name);
		if (match) {
			callback({ require: 'nodes/' + match[1] });
		} else {
			callback(null);
		}
	}
}

(<any>ko.components).loaders.push(new NodeLoader());

// [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

// Start the application
ko.applyBindings({ route: router.currentRoute });
