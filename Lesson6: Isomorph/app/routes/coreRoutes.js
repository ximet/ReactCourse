var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactApp = React.createFactory(require('../components/ReactApp'));

module.exports = function(app) {

	app.get('/', function(req, res){
		var reactHtml = ReactDOMServer.renderToString(<ReactApp />);
    res.render('index.ejs', {reactOutput: reactHtml});
	});

};
