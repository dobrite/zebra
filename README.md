zebra
=====

Zebra stripes 4 lyfe!

Visit: http://mysterious-wave-6853.herokuapp.com/

Pulls JSON from [HN API's](http://api.ihackernews.com/) [front page endpoint](http://api.ihackernews.com/page) and displays a nice zebra-striped index page.

The Zebra stripes as implemented won't work IE < 9 due to the nth-child css selector used. Alternatives are a  polyfill ([Selectivizr](http://selectivizr.com/)), jQuery supports an [nth-child selector](http://api.jquery.com/nth-child-selector/), or push it to Handlebars templates with a [helper](http://assemble.io/helpers/helpers-comparison.html) or even straight javascript and a for loop to add a stripe class.

Tech used:
* NPM
* Bower
* Backbone
* Backbone.Marionette
* Bootstrap (yeti theme)
* HTML5 Boilerplate
* Handlebars
* RequireJS
* Built to a single file including almond.js AMD loader
* Rack w/ HN API Proxy (bypass ajax CORS error)

```
$ git clone git@github.com:dobrite/zebra.git
$ cd zebra
$ npm install
$ bower install
$ grunt build
$ chruby ruby-2.1.0 # or similar
$ bundle install
$ rackup config.ru
<visit http://localhost:9292>
```
