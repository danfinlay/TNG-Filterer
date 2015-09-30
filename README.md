# TNG-filterer

A web application for filtering and randomizing recommendations for episodes of `Star Trek: The Next Generation`. Based on the work in [this UI](https://github.com/flyswatter/which-tng) and [this database generator](https://github.com/flyswatter/TNG-Database-Seeder).

This is now an Ember application, to more easily keep track of the various filters and state. I'll be drawing in the best parts of the UI from the other project, and I've already imported an episode database, and it's available to the `applicationController` on start up, with `model` being an array of all episodes in order of release date, and `tags` being an array of all topics, or `References` ever touched on in more than one episode.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

