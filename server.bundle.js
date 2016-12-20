/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(14);
	var path = __webpack_require__(15);
	var compression = __webpack_require__(16);

	var app = express();

	app.use(compression());

	// serve our static stuff like index.css
	app.use(express.static(path.join(__dirname, 'public')));
	// we'll use this to render our app to an html string

	// and these to match the url to routes and then render


	// send all requests to index.html so browserHistory works

	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    // in here we can make some decisions all at once
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _About = __webpack_require__(9);

	var _About2 = _interopRequireDefault(_About);

	var _Articles = __webpack_require__(10);

	var _Articles2 = _interopRequireDefault(_Articles);

	var _Article = __webpack_require__(12);

	var _Article2 = _interopRequireDefault(_Article);

	var _Home = __webpack_require__(13);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var blogData = [{
	    id: 1,
	    slug: 'article-one',
	    title: 'article one',
	    body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
	    visual: '/img/articles/visual.png',
	    timestamp: '2017-01-01'
	}, {
	    id: 2,
	    slug: 'article-two',
	    title: 'article two',
	    body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
	    visual: '/img/articles/visual.png',
	    timestamp: '2017-01-02'
	}, {
	    id: 3,
	    slug: 'article-three',
	    title: 'article three',
	    body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
	    visual: '/img/articles/visual.png',
	    timestamp: '2017-01-03'
	}, {
	    id: 4,
	    slug: 'article-four',
	    title: 'article four',
	    body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
	    visual: '/img/articles/visual.png',
	    timestamp: '2017-01-04'
	}, {
	    id: 5,
	    slug: 'article-five',
	    title: 'article five',
	    body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto autem dignissimos fugiat harum, hic molestias recusandae reiciendis. Ab aut consequatur corporis dignissimos eveniet minima minus nemo rerum. Beatae, vel!</p>',
	    visual: '/img/articles/visual.png',
	    timestamp: '2017-01-05'
	}]; // modules/routes.js


	module.exports = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default, articles: blogData, test: 'testing' },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/articles', component: _Articles2.default, articles: blogData },
	        _react2.default.createElement(_reactRouter.Route, { path: '/articles/:articleSlug/:theDate', component: _Article2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _LinkList = __webpack_require__(7);

	var _LinkList2 = _interopRequireDefault(_LinkList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'App',
	    render: function render() {
	        console.log('App.props.children', this.props.children);
	        return _react2.default.createElement(
	            'div',
	            { className: 'main' },
	            _react2.default.createElement(
	                'nav',
	                { className: 'navbar navbar-default' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container-fluid' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'navbar-header' },
	                        _react2.default.createElement(
	                            'button',
	                            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#main-nav', 'aria-expanded': 'false' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'sr-only' },
	                                'Toggle navigation'
	                            ),
	                            _react2.default.createElement('span', { className: 'icon-bar' }),
	                            _react2.default.createElement('span', { className: 'icon-bar' }),
	                            _react2.default.createElement('span', { className: 'icon-bar' })
	                        ),
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'navbar-brand', href: '/' },
	                            _react2.default.createElement('img', { src: '/img/logo.png' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'collapse navbar-collapse', id: 'main-nav' },
	                        _react2.default.createElement(
	                            'ul',
	                            { role: 'nav', className: 'nav navbar-nav main-navigation' },
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _NavLink2.default,
	                                    { to: '/', onlyActiveOnIndex: true },
	                                    'Home'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _NavLink2.default,
	                                    { to: '/articles' },
	                                    'Articles'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _NavLink2.default,
	                                    { to: '/about' },
	                                    'About'
	                                )
	                            )
	                        )
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-8 main-content' },
	                    this.props.children
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-4 side-content' },
	                    _react2.default.createElement(_LinkList2.default, { articles: this.props.route.articles })
	                )
	            )
	        );
	    }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // modules/NavLink.js


	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SearchBar = __webpack_require__(8);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'LinkList',

	    getInitialState: function getInitialState() {
	        return { filterText: '' };
	    },
	    handleUserInput: function handleUserInput(filterText) {
	        filterText = filterText.toLowerCase();
	        this.setState({
	            filterText: filterText
	        });
	    },
	    render: function render() {
	        var _this = this;

	        console.log('this LinkList', this, this.props.articles);
	        var rows = this.props.articles.map(function (article) {
	            if (_this.state.filterText.length && article.title.toLowerCase().indexOf(_this.state.filterText) === -1) {
	                return;
	            }
	            var link = "/articles/" + article.slug + "/" + article.timestamp;
	            return _react2.default.createElement(
	                'li',
	                { className: 'list-group-item', key: article.title },
	                _react2.default.createElement(
	                    _NavLink2.default,
	                    { to: link },
	                    article.title
	                )
	            );
	        });
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_SearchBar2.default, {
	                filterText: this.state.filterText,
	                onUserInput: this.handleUserInput
	            }),
	            _react2.default.createElement(
	                'ul',
	                { className: 'list-group' },
	                rows
	            )
	        );
	    }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: "SearchBar",
	    handleChange: function handleChange() {
	        this.props.onUserInput(this.filterTextInput.value);
	    },
	    render: function render() {
	        var _this = this;

	        return _react2.default.createElement(
	            "form",
	            null,
	            _react2.default.createElement("input", {
	                type: "text",
	                placeholder: "Search...",
	                value: this.props.filterText,
	                ref: function ref(input) {
	                    return _this.filterTextInput = input;
	                },
	                onChange: this.handleChange,
	                className: "form-control"
	            })
	        );
	    }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'About',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'About'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eos est nemo. Amet assumenda doloremque nihil odio voluptatem. Aliquid consectetur dignissimos fugiat maiores minima nemo placeat quaerat ullam vel veritatis?'
	      )
	    );
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ArticleList = __webpack_require__(11);

	var _ArticleList2 = _interopRequireDefault(_ArticleList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Articles',
	  render: function render() {
	    console.log('Articles.props.route.articles', this.props.route.articles);
	    // console.log('Route.path == /articles ', this.props.route.path == '/articles' )
	    // console.log('this.props.children', typeof this.props.children, this.props.children)
	    // console.log('this.props.location.pathname',this.props.location.pathname);
	    // console.log('articles',this.props.route.articles);

	    var articles = this.props.route.articles;

	    var content = this.props.location.pathname == '/articles' ? _react2.default.createElement(_ArticleList2.default, { articles: articles }) : this.props.children;

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'Articles'
	      ),
	      content
	    );
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ArticleShort(props) {
	    var url = '/articles/' + props.slug + '/' + props.timestamp;
	    var body = props.body;
	    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	    return _react2.default.createElement(
	        'div',
	        { className: 'article short' },
	        _react2.default.createElement(
	            'h3',
	            { className: 'article-title' },
	            props.title,
	            '  ',
	            _react2.default.createElement(
	                'span',
	                { className: 'article-date' },
	                new Date(props.timestamp).toLocaleString('en-US', options)
	            )
	        ),
	        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: body } }),
	        _react2.default.createElement(
	            _NavLink2.default,
	            { to: url },
	            props.title
	        )
	    );
	}

	exports.default = _react2.default.createClass({
	    displayName: 'ArticleList',
	    render: function render() {
	        var rows = [];
	        var lastCategory = null;
	        this.props.articles.forEach(function (a) {
	            rows.push(_react2.default.createElement(ArticleShort, { title: a.title, slug: a.slug, timestamp: a.timestamp, body: a.body }));
	        });
	        return _react2.default.createElement(
	            'div',
	            null,
	            rows
	        );
	    }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Article',
	  findArticle: function findArticle(articleSlug) {
	    var articles = this.props.routes[0].articles;
	    for (var i = 0; i < articles.length; i++) {
	      var a = articles[i];
	      if (a.slug === articleSlug) return a;
	    };
	  },
	  render: function render() {
	    console.log('Article props', this.props);
	    console.log('Article articles', this.props.routes[0].articles);
	    var _props$params = this.props.params,
	        articleSlug = _props$params.articleSlug,
	        theDate = _props$params.theDate;

	    var a = this.findArticle(articleSlug);
	    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _NavLink2.default,
	          { to: '/articles' },
	          'Back to list'
	        )
	      ),
	      _react2.default.createElement(
	        'h3',
	        { className: 'article-title' },
	        a.title,
	        '  ',
	        _react2.default.createElement(
	          'span',
	          { className: 'article-date' },
	          new Date(theDate).toLocaleString('en-US', options)
	        )
	      ),
	      _react2.default.createElement('img', { className: 'article-visual', src: a.visual }),
	      _react2.default.createElement('span', { className: 'article-body', dangerouslySetInnerHTML: { __html: a.body } })
	    );
	  }
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Home',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'Home'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eos est nemo. Amet assumenda doloremque nihil odio voluptatem. Aliquid consectetur dignissimos fugiat maiores minima nemo placeat quaerat ullam vel veritatis?'
	      )
	    );
	  }
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);