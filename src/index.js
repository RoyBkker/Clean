var angular = require('angular');

var techsModule = require('./app/techs/index');
require('angular-ui-router');
require('angular-ui-bootstrap');

var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/header');
var title = require('./app/title');
var footer = require('./app/footer');

require('../style/index.scss');

angular
  .module('app', [techsModule, 'ui.router', 'ui.bootstrap'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
