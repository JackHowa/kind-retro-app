import EmberRouter from '@ember/routing/router';
import config from 'kind/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // index route is implicit
  this.route('boards', function () {
    this.route('board', {
      // interesting snake case for this is a rule
      path: ':board_id',
    });
  });
  this.route('home');
});
